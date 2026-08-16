import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../Core/Services/employee';
import { CommonModule, NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.html',
  imports: [CommonModule, NgFor, AsyncPipe],
})
export class EmployeeList implements OnInit {

   employees$!: Observable<Employee[]>;
  test: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

 ngOnInit() {
  this.employees$ = this.employeeService.getAll();
}
}
