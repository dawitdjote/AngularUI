import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../Core/Services/employee';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  templateUrl: './employee-list.html'
})
export class EmployeeList implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getAll().subscribe({
      next: (data) => {
        this.employees = data;
        console.log('Employees loaded successfully', this.employees);
      },
      error: (err) => {
        console.error('Error loading employees', err);
      }
    });
  }
}
