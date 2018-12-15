import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmpService } from "../emp.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  list = [];
  constructor(private aRoute: ActivatedRoute, private emps: EmpService) {
    this.aRoute.data.subscribe(data => {
      console.log(data);
      this.list = data.employees.data;
    });
  }

  ngOnInit() {}

  deleteemp(id) {
    this.emps.deleteEmp(id).subscribe(res => {
      alert("deleted");
    });
  }
}
