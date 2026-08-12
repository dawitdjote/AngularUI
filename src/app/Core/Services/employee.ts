import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  id?: number;
  name?: string;
  sex?: string;
  salary: number;
  department?: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {

  private apiUrl = 'http://localhost:5154/api/Employees';

  constructor(private http: HttpClient) {}

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}

