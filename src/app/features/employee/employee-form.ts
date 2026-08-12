import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee, EmployeeService } from '../../Core/Services/employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.html',
})
export class EmployeeForm {
sexes = ['Male', 'Female'];
departments = ['HR', 'IT', 'Finance', 'Marketing'];

  constructor(private employeeService: EmployeeService) {}

  form = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    sex: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    salary: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(0)] }),
    department: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] })
  });

  onSubmit() {
  if (this.form.valid) {
   const employee: Employee = {
      name: this.form.value.name,
      sex: this.form.value.sex,
      salary: (this.form.value.salary ?? 0),
      department: this.form.value.department
    };

    this.employeeService.create(employee).subscribe({
      next: () => {
        alert('Employee saved successfully!');
        this.form.reset();
      },
      error: (err) => console.error('Error saving employee:', err)
    });
  }
}
}
