import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'home',    component: UserInfoComponent },
  { path: '',        component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
