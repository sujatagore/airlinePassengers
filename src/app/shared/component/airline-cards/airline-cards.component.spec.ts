import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineCardsComponent } from './airline-cards.component';

describe('AirlineCardsComponent', () => {
  let component: AirlineCardsComponent;
  let fixture: ComponentFixture<AirlineCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlineCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
