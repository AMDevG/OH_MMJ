import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudFinderComponent } from './bud-finder.component';

describe('BudFinderComponent', () => {
  let component: BudFinderComponent;
  let fixture: ComponentFixture<BudFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
