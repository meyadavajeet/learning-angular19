import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  firstName: string = 'Ajeet';
  rollNo: number = 1;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = 'Enter first name';
  div1ClassName: string = 'bg-primary'; // it's a bootstrap class
  selectedCity: string="";

  constructor() {
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMessage() {
    alert('Welcome to angular 19 explore the world of MEAN STACK');
  }

  onCityChange(){
    console.log('city changed')
  }
}
