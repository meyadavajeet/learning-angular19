import { Component, Input } from '@angular/core';
import { ProgressbarComponent } from '../reusable/progressbar/progressbar.component';
import { TabsComponent } from '../reusable/tabs/tabs.component';

@Component({
  selector: 'app-directives',
  imports: [ProgressbarComponent, TabsComponent],
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

  @Input() customerTabs: string[] = ['Basic info', 'Plan info', 'Payments'];
}
