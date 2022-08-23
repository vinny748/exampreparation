import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year3Component } from './year3.component';

describe('Year3Component', () => {
  let component: Year3Component;
  let fixture: ComponentFixture<Year3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Year3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Year3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
