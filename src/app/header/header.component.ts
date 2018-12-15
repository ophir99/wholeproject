import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  showMenu = true;
  constructor(private router: Router) {}

  ngOnInit() {}

  doLogout() {
    sessionStorage.removeItem("user");
    this.router.navigateByUrl("/");
  }
}
