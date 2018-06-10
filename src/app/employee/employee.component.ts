import { Component, OnInit } from '@angular/core';
import {EmpDataService} from "../emp-data.service";
import {Emp} from '../emp';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 employeeList:Emp[];
 employee:Emp;
  constructor(private employeeService: EmpDataService) { }

  ngOnInit() {
    this.loadEmployee()
  }
  loadEmployee(){
   
    //Get all Employee
    this.employeeService.GetEmployeeAsync()
                       .subscribe(
                        employeelist => this.employeeList = employeelist, //Bind to view
                            err => {
                                // Log errors if any
                                console.log(err);
                            });
}
InsertEmployee(empid:number,name:string,salary:number){
  this.employee={id:empid,name:name,salary:salary}
  this.employeeService.InsertEmployee(this.employee).subscribe(data=>{console.log(data);
    this.loadEmployee();
  },
  err => {
    console.log(err);
});
}
UpdateEmployee(empid:number,name:string,salary:number){
  this.employee={id:empid,name:name,salary:salary}
  this.employeeService.UpdateEmployee(this.employee).subscribe(data=>{console.log(data);
    this.loadEmployee();
  },
  err => {
    console.log(err);
});
}

DeleteEmployee(empid:number){
  this.employeeService.DeleteEmployee(empid).subscribe(data=>{console.log(data);
    this.loadEmployee();
  },
  err => {
    console.log(err);
});
}
}