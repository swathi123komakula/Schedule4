import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallairportComponent } from './viewallairport.component';

describe('ViewallairportComponent', () => {
  let component: ViewallairportComponent;
  let fixture: ComponentFixture<ViewallairportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallairportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallairportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
