import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysCalculatorComponent } from './days-calculator.component';

describe('DaysCalculatorComponent', () => {
  let component: DaysCalculatorComponent;
  let fixture: ComponentFixture<DaysCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
