import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ProgressbarComponent } from '../reusable/progressbar/progressbar.component';
import { TabsComponent } from '../reusable/tabs/tabs.component';

@Component({
  selector: 'app-directives',
  imports: [ProgressbarComponent, TabsComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  // View Child Implementation
  // get reference of the textbox
  @ViewChild('myText') cityTextBox: ElementRef | undefined;

  // get reference of the re-usable-component
  @ViewChild(TabsComponent) myTabComponent: TabsComponent | undefined;

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

  readValue() {
    debugger;
    const city = this.cityTextBox?.nativeElement.value;
    if (this.cityTextBox) {
      this.cityTextBox.nativeElement.style.color = 'red';
    }

    const myTab = this.myTabComponent?.currentTab;
  }
}
