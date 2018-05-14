import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs/Observable";
import { Position } from "./position";
import { Employee } from "./employee";
import {EmployeeRaw} from "./employeeRaw";
import { HttpClientModule } from "@angular/common/http";

@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) { }
  private url = "https://web422-api.herokuapp.com";
getEmployees() : Observable<Employee[]> {
  return this.http.get<Employee[]>("https://web422-api.herokuapp.com/employees");

}
getEmployee(id: string) : Observable<EmployeeRaw[]> {
  
  return this.http.get<EmployeeRaw[]>("https://web422-api.herokuapp.com/employee/"+id );
}


saveEmployee(employee: EmployeeRaw) : Observable<any>{
  return this.http.put<any>("https://web422-api.herokuapp.com/employee/"+employee._id, employee);
}
}
