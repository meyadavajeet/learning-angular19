import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent implements OnInit {
  @Input() tabList: string[] = [];

  
  // Commmunication from child to parent using the @output and Eventemitter
  @Output() onTabClicked = new EventEmitter<string>();
  currentTab: string = 'New Bikes';
  onTabChange(tabName: string) {
    // debugger;
    this.currentTab = tabName;
    this.onTabClicked.emit(tabName);
  }

  // if you want particular tab selected, In my case I want lastone should be selected
  ngOnInit() {
    debugger
    this.currentTab = this.tabList[this.tabList.length - 1];
  }

}
