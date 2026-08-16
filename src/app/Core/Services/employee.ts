import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

export interface Employee {
  id?: number;
  name?: string;
  sex?: string;
  salary: number;
  department?: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private apiUrl = environment.apiUrl + '/api/Employees';

  constructor(private http: HttpClient) {}

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  getAll(): Observable<Employee[]> {
    console.log('Fetching all employees from API:', this.apiUrl); 
    return this.http.get<Employee[]>(this.apiUrl);
  }
}

