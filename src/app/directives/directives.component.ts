import { Component } from '@angular/core';
import { ProgressbarComponent } from "../reusable/progressbar/progressbar.component";

@Component({
  selector: 'app-directives',
  imports: [ProgressbarComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  myClassName: string = 'bg-warning';

  isActive: boolean = true;

  productPrice = 600;

  divBackColor: string = '';

  myCss = {
    color: 'red',
    'background:color': 'black',
    'font-size': '40px',
  };
}
