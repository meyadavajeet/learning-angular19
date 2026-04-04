import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-component-life-cycle',
  imports: [],
  templateUrl: './component-life-cycle.component.html',
  styleUrl: './component-life-cycle.component.css',
})
export class ComponentLifeCycleComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    DoCheck,
    OnDestroy
{
  ngOnInit(): void {
    console.log('ng OnInit');
    //api call or function invoke
  }
  ngAfterContentInit(): void {
    console.log('ng after content init');
  }
  ngAfterContentChecked(): void {
    console.log('ng after content checked');
  }
  ngAfterViewInit(): void {
    console.log('ng after content checked');
    //view child
  }
  ngAfterViewChecked(): void {
    console.log('ng after view checked');
  }
  ngDoCheck(): void {
    console.log('ng do check');
    //change detection
  }
  ngOnDestroy(): void {
    console.log('ng on destroy');
    // unsubscribe logic
  }
}
