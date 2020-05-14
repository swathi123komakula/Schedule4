import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewscheduledFlightsComponent } from './viewscheduled-flights.component';

describe('ViewscheduledFlightsComponent', () => {
  let component: ViewscheduledFlightsComponent;
  let fixture: ComponentFixture<ViewscheduledFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewscheduledFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewscheduledFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
