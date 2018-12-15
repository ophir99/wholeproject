import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EmpService } from "./../emp.service";
@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(private empS: EmpService) {}
  resolve() {
    return this.empS.fetchEmp();
  }
}
