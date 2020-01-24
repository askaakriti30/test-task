import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AddEmployeeComponent} from "./dashboard/add-employee/add-employee.component";
import {EditEmployeeComponent} from "./dashboard/edit-employee/edit-employee.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'add-employee', component: AddEmployeeComponent },
  // { path: 'edit-employee', component: EditEmployeeComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
