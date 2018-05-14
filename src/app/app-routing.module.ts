import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home/home.component";

import { EmployeesComponent } from "./employees/employees.component";
import { PositionsComponent } from "./positions/positions.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import {EmployeeComponent} from "./employee/employee.component";
import {PositionComponent} from "./position/position.component";
const routes: Routes =[
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'positions', component: PositionsComponent},
  { path: 'employee/:_id', component: EmployeeComponent },
  { path: 'position/:_id', component: PositionComponent },
  {path:'**', component: PageNotFoundComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

