import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentComponentComponent } from './ngcontent-component.component';

describe('NgcontentComponentComponent', () => {
  let component: NgcontentComponentComponent;
  let fixture: ComponentFixture<NgcontentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgcontentComponentComponent]
    });
    fixture = TestBed.createComponent(NgcontentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
