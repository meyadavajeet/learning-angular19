import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,SlicePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  courseName:string = "Angular 19 series";
  courseDuration:string = "this course is of 3months";

  currentDate:Date = new Date();

  studentObj={
    name:"AJ",
    email:"aj@gmail.com",
    mobile:88989898989
  }

  rollNo:number[] = [12,20,22,21,100,201]
}
