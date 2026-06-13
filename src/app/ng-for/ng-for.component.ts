import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressbarComponent } from "../reusable/progressbar/progressbar.component";

export interface Employee {
  employeeId: number;
  city: string;
  name: string;
  contactNo: number;
  attendance?: number;
}
@Component({
  selector: 'app-ng-for',
  imports: [NgFor, ProgressbarComponent],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
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
      attendance: 30,
    },
    {
      employeeId: 122,
      city: 'Kolkata',
      name: 'BBB',
      contactNo: 211111111,
      attendance: 40,
    },
    {
      employeeId: 123,
      city: 'Ranchi',
      name: 'CCC',
      contactNo: 311111111,
      attendance: 50,
    },
    {
      employeeId: 124,
      city: 'Nagpur',
      name: 'DDD',
      contactNo: 111111111,
      attendance: 60,
    },
    {
      employeeId: 125,
      city: 'Hazaribag',
      name: 'EEE',
      contactNo: 111111111,
      attendance: 70,
    },
  ];
}
