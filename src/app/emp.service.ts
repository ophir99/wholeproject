import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { urls } from "./config";
@Injectable()
export class EmpService {
  constructor(private httpC: HttpClient) {}

  createEmp = data => this.httpC.post(`${urls.server}/createemp`, data);

  fetchEmp = () => this.httpC.get(`${urls.server}/fetchemp`);

  getSingleEmp = id =>
    this.httpC.get(`${urls.server}/getemp`, {
      params: new HttpParams().set("user", id)
    });

  editEmp = (id, data) => this.httpC.put(`${urls.server}/editemp/${id}`, data);

  deleteEmp = id => this.httpC.delete(`${urls.server}/deleteemp/${id}`);
}
