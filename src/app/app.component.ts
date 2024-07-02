import { Component, OnInit } from '@angular/core';
import { IPassenger } from './shared/module/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'airlinePassengers';

  passengers: IPassenger[] = [
    {
      name: 'Stephen',
      checkInDate: 'Jun 27, 2024',
      children: 0,
      checkInStatus : true,
      id : 1
    },
    {
      name: 'Rose',
      checkInDate: 'Jun 27, 2024',
      children: 2,
      checkInStatus : true,
      id : 2
    },
    {
      name: 'James',
      checkInDate: 'Not Checked In Yet!',
      children: 0,
      checkInStatus : false,
      id : 3
    },
    {
      name: 'Louise',
      checkInDate: 'Jun 27, 2024',
      children: 0,
      checkInStatus : true,
      id: 4
    },
    {
      name: 'Tina',
      checkInDate: 'Jun 27, 2024',
      children: 3,
      checkInStatus : true,
      id : 5
    },
    {
      name: 'Jhon',
      checkInDate: 'Not Checked In Yet!',
      children: 1,
      checkInStatus : false,
      id : 6
    }
  ];

  checkedInArr!:Array<IPassenger>

  ngOnInit(): void {
    this.checkedInArr = this.passengers.filter(pass => pass.checkInStatus === true)
  }

  onPassenger(passenger : IPassenger){
    let objIndx = this.passengers.findIndex(passobj=>{
      return passobj.id === passenger.id
     })
 
     this.passengers.splice(objIndx,1)
 
    if(passenger.checkInStatus === true){
     let objIndx1 = this.checkedInArr.findIndex(passobj => {
       return passobj.id === passenger.id
      })
      this.checkedInArr.splice(objIndx1,1)
    }
  }
}
