import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmpService } from "../emp.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-editusers",
  templateUrl: "./editusers.component.html",
  styleUrls: ["./editusers.component.css"]
})
export class EditusersComponent implements OnInit {
  id;
  userForm;
  data;
  constructor(
    private fb: FormBuilder,
    private aroute: ActivatedRoute,
    private empS: EmpService
  ) {
    this.aroute.params.subscribe(data => {
      console.log(data);
      this.id = data.id;
    });
    this.createEditForm();
  }

  ngOnInit() {
    this.empS.getSingleEmp(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.data = res.data[0];
      },
      err => {
        console.log(err);
      },
      () => {
        this.userForm.patchValue(this.data);
      }
    );
  }

  createEditForm() {
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

  editEmp() {
    this.empS.editEmp(this.id, this.userForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
