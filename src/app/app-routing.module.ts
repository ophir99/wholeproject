import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { UserhomeComponent } from "./userhome/userhome.component";
import { UsersComponent } from "./users/users.component";

import { UserResolver } from "./users/users.resolver";
import { combineLatest } from "rxjs";
import { EditusersComponent } from "./editusers/editusers.component";
const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "user",
    loadChildren: "./users/users.module#UsersModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
