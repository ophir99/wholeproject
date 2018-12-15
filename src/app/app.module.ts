import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { UserhomeComponent } from "./userhome/userhome.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UserFormComponent } from "./user-form/user-form.component";
import { UsersComponent } from "./users/users.component";
import { EditusersComponent } from "./editusers/editusers.component";
import { UserService } from "./user.service";
import { UsersModule } from "./users/users.module";
@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingPageComponent],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
