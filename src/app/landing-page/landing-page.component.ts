import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  signupForm;
  loginForm;
  showLoginForm = true;
  showLoginErr = false;
  showSuccessAlert = false;
  showLoginSuccess = false;
  showLoginERR = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.createLoginForm();
    this.createSignupForm();
  }

  ngOnInit() {}

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });
  }
  createSignupForm() {
    this.signupForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(4)]]
    });
  }

  showSignUp() {
    this.showLoginForm = !this.showLoginForm;
  }

  login() {
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        if (res.message === "Wrong Credentials") {
          console.log("Entered");
          this.showLoginERR = true;
        } else {
          sessionStorage.setItem("user", res.user);
          this.router.navigateByUrl("/user");
        }
        setTimeout(() => {
          this.showLoginERR = false;
        }, 2000);
      },
      err => {
        console.log(err);
      }
    );
  }

  signup() {
    this.userService.signup(this.signupForm.value).subscribe(
      res => {
        this.showSuccessAlert = true;
        console.log(res);
        setTimeout(() => {
          this.showSuccessAlert = false;
        }, 2000);
      },
      err => {
        console.log(err);
        this.showLoginErr = true;
        setTimeout(() => {
          this.showLoginErr = false;
        }, 2000);
      }
    );
  }
}
