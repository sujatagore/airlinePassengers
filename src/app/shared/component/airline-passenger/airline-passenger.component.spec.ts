import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinePassengerComponent } from './airline-passenger.component';

describe('AirlinePassengerComponent', () => {
  let component: AirlinePassengerComponent;
  let fixture: ComponentFixture<AirlinePassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinePassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlinePassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
