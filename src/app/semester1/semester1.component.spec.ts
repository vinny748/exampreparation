import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semester1Component } from './semester1.component';

describe('Semester1Component', () => {
  let component: Semester1Component;
  let fixture: ComponentFixture<Semester1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Semester1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Semester1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
