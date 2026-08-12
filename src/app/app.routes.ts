import { Routes } from '@angular/router';
import { EmployeeForm } from './features/employee/employee-form';
import { EmployeeList } from './features/employee/employee-list';


export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeList },
  { path: 'employees/new', component: EmployeeForm },
];

