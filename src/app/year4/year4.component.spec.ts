import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year4Component } from './year4.component';

describe('Year4Component', () => {
  let component: Year4Component;
  let fixture: ComponentFixture<Year4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Year4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Year4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
