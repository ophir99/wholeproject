import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { urls as links } from "./config";
@Injectable()
export class UserService {
  constructor(private httpC: HttpClient) {}

  signup = data => this.httpC.post(`${links.server}/createuser`, data);
  login = data => this.httpC.post(`${links.server}/loginuser`, data);
}
