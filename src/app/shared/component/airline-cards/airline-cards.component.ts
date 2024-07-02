import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IPassenger } from '../../module/data.interface';

@Component({
  selector: 'app-airline-cards',
  templateUrl: './airline-cards.component.html',
  styleUrls: ['./airline-cards.component.scss']
})
export class AirlineCardsComponent implements OnInit {

  @Input() passArr !: Array<IPassenger>

  @Output() emitPassenger : EventEmitter<IPassenger> = new EventEmitter<IPassenger>()

  isInEditMode : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('passName') passNameRef !: ElementRef
  @ViewChild('editBtn') editBtnRef !: ElementRef
  @ViewChild('updBtn') updBtnRef !: ElementRef
  @ViewChild('delBtn') delBtnRef !: ElementRef
  @Input() getPass !: IPassenger

  // onEdit(){
  //   this.passNameRef.nativeElement.style.borderColor = "black"
  //   this.editBtnRef.nativeElement.style.display = 'none'
  //   this.updBtnRef.nativeElement.style.display = 'block'
  // }

  onUpdate(){
    let inputControl = this.passNameRef.nativeElement as HTMLInputElement;

    this.getPass.name = inputControl.value as string;
    confirm('Passenger Gets Updated Successfully!!!!!')
  }

  onDelete(){
      confirm('Are you sure you want to remove this passenger!!!!!')
      this.emitPassenger.emit(this.getPass)
  }
}
