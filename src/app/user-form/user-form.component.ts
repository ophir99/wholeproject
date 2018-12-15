import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { EmpService } from "../emp.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"]
})
export class UserFormComponent implements OnInit {
  userForm;
  isAddSame;
  constructor(private fb: FormBuilder, private empS: EmpService) {
    this.userForm = this.fb.group({
      name: [],
      mobile: [],
      skills: this.fb.array([]),
      location: this.fb.group({
        permanent: this.fb.group({
          state: ["", [Validators.required]],
          city: [],
          pin: []
        }),
        temporary: this.fb.group({
          state: ["", Validators.required],
          city: [],
          pin: []
        })
      })
    });
  }

  createSkillFormGroup() {
    const fg = this.fb.group({
      name: [],
      yoe: [],
      rating: [1]
    });
    this.userForm.get("skills").push(fg);
  }

  addSkills() {}
  ngOnInit() {}

  createEmp() {
    this.empS.createEmp(this.userForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  setAddress(ev) {
    console.log(ev.target.checked);
    if (ev.target.checked) {
      this.userForm
        .get("location.temporary")
        .setValue(this.userForm.get("location.permanent").value);
    } else {
      this.userForm.get("location.temporary").reset();
    }
  }
}
