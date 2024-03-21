import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, 
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-component',
  template: `
  <p>{{ message }}</p>
`,
  styleUrls: ['./lifecycle-component.component.scss']
})
export class LifecycleComponentComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  message: string = '';

  constructor() { 
    console.log('Constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges works');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.message = 'Initialized';
  }

  ngDoCheck() {
    console.log('ngDoCheck works');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit works');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked works');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit works');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked works');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy works');
  }

}
