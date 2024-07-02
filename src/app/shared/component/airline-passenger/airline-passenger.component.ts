import { Component, Input, OnInit } from '@angular/core';
import { IPassenger } from '../../module/data.interface';

@Component({
  selector: 'app-airline-passenger',
  templateUrl: './airline-passenger.component.html',
  styleUrls: ['./airline-passenger.component.scss']
})
export class AirlinePassengerComponent implements OnInit {

  @Input() passArr !: Array<IPassenger> 
  
  ngOnInit(): void {
    
  }  
}
