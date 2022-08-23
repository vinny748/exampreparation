import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year2Component } from './year2.component';

describe('Year2Component', () => {
  let component: Year2Component;
  let fixture: ComponentFixture<Year2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Year2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Year2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
