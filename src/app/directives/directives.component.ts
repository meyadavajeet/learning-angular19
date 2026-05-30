import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [],
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
