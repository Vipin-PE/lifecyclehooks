import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h2>Child Component</h2>
      <p>Received Input: {{ inputValue }}</p>
    </div>
  `
})
export class ChildComponent implements OnChanges {
  @Input() inputValue!: string; 
  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputValue']) { 
      console.log('Input value changed:', changes['inputValue'].currentValue);
    }
  }
}