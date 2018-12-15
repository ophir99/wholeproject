import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserhomeComponent } from "../userhome/userhome.component";
import { UserResolver } from "./users.resolver";
import { UsersComponent } from "./users.component";
import { EditusersComponent } from "../editusers/editusers.component";
import { UserFormComponent } from "../user-form/user-form.component";
import { EmpService } from "../emp.service";
import { UserService } from "../user.service";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    UserhomeComponent,
    UserFormComponent,
    UsersComponent,
    EditusersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: UserhomeComponent
      },
      {
        path: "userlist",
        resolve: {
          employees: UserResolver
        },
        component: UsersComponent
      },
      {
        path: "edit/:id",
        component: EditusersComponent
      }
    ])
  ],
  providers: [EmpService, UserService, UserResolver]
})
export class UsersModule {}
