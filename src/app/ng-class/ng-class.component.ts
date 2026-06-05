import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css',
})
export class NgClassComponent {
  div1ClassName: string = 'bg-warning';
  isChecked: boolean = false;
  div3ClassName: string = '';

  addDynamicClass(className: string): void {
    this.div1ClassName = className;
  }
}
