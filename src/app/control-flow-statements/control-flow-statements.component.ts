import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../ng-for/ng-for.component';

@Component({
  selector: 'app-control-flow-statements',
  imports: [FormsModule],
  templateUrl: './control-flow-statements.component.html',
  styleUrl: './control-flow-statements.component.css',
})
export class ControlFlowStatementsComponent {
  isDiv1Visble: boolean = false;
  isChecked: boolean = false;
  dayName: string = '';

  cityList: string[] = [
    'Pune',
    'Kolkata',
    'Ranchi',
    'Mumbai',
    'Nagpur',
    'Hazaribag',
  ];

  employeeList: Employee[] = [
    {
      employeeId: 121,
      city: 'Pune',
      name: 'AAA',
      contactNo: 111111111,
    },
    {
      employeeId: 122,
      city: 'Kolkata',
      name: 'BBB',
      contactNo: 211111111,
    },
    {
      employeeId: 123,
      city: 'Ranchi',
      name: 'CCC',
      contactNo: 311111111,
    },
    {
      employeeId: 124,
      city: 'Nagpur',
      name: 'DDD',
      contactNo: 111111111,
    },
    {
      employeeId: 125,
      city: 'Hazaribag',
      name: 'EEE',
      contactNo: 111111111,
    },
  ];

  showHideBtn(val: boolean) {
    this.isDiv1Visble = val;
  }
}
