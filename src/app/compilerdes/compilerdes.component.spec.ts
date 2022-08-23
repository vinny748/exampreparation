import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerdesComponent } from './compilerdes.component';

describe('CompilerdesComponent', () => {
  let component: CompilerdesComponent;
  let fixture: ComponentFixture<CompilerdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilerdesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompilerdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
