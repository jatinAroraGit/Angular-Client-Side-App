import { Component, OnInit } from '@angular/core';
import { Employee } from '../data/employee';
import { DatePipe } from '@angular/common';
import { EmployeeService } from '../data/employee.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
employees:Employee[];
getEmployeesSub: any;
loadingError:boolean;
filteredEmployees: Employee[];
  constructor(private employeeService: EmployeeService, private router: Router)  {  }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees().subscribe( data => {
      this.employees = data;
      this.filteredEmployees=data;
    }, () =>{
      this.loadingError = true;
    });
  }
  ngOnDestroy(){
    if(this.getEmployeesSub){this.getEmployeesSub.unsubscribe();}
  }
  routeEmployee(id: string){
    this.router.navigate(['/employee', id]);
  }
  onEmployeeSearchKeyUP(event:any){
    let val = event.target.value.toLowerCase();

    this.filteredEmployees = this.employees.filter((employee) => {
      
      if(employee.FirstName.toLowerCase().includes(val) || 
      employee.LastName.toLowerCase().includes(val) ||
      employee.Position.PositionName.toLowerCase().includes(val) ||
      employee.PhoneNum.toLowerCase().includes(val)  ){
        return true;
      }
    });
  }
}

