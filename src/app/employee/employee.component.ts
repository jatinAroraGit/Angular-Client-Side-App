import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EmployeeRaw} from '../data/employeeRaw'
import {EmployeeService} from '../data/employee.service';
import {Position} from '../data/position';
import { PositionService } from '../data/position.service';
import { error } from 'util';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  paramSubScription: any;
  employeeSubscription: any;
  getPositionsSubscription: any;
  saveEmployeeSubscription: any;
 
  employee: EmployeeRaw;
  positions: Position[];

  successMessage =  false;
  failMessage=false;
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,  private positionService: PositionService) { }

  ngOnInit() {
    this.paramSubScription = this.route.params.subscribe((params) => {
      this.employeeSubscription = this.employeeService.getEmployee(params['_id']).subscribe((emp) => {
        this.employee = emp[0];
        console.log("****************************************");
        console.log(emp[0]);
        this.getPositionsSubscription = this.positionService.getPositions().subscribe( data => {
          this.positions = data;
        });
      });
 });
 
  }
onSubmit(){


  this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe(()=>{
    this.successMessage = true;
    setTimeout(()=>{
      this.successMessage = false;
    },2500)
  }, error =>{
    this.failMessage = true;
    setTimeout(()=>{
      this.failMessage = false;
    },2500)
  });
}

ngOnDestroy(){
  if(this.paramSubScription!=null){this.paramSubScription.unsubscribe();}
  if(this.employeeSubscription!=null){this.employeeSubscription.unsubscribe();}
  if(this.getPositionsSubscription!=null){this.getPositionsSubscription.unsubscribe();}
  if(this.saveEmployeeSubscription!=null){this.saveEmployeeSubscription.unsubscribe();}
}
}
