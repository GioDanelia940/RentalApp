import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  @Input() payOnDay!: number;
  @Input() maxGuestCount: number = 0;
  testArr =  [['adults','13+'],['children','3-13'],['infants','Under 2'],['pets','Bringing a service animal?']]
  value!:number
  dateSelection: boolean = false;
  minDate: Date = new Date();
  reserveDetailForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.reserveDetailForm = new FormGroup({
      range: new FormGroup({
        start: new FormControl(new Date()),
        end: new FormControl(new Date()),
      }),
      adults: new FormControl(),
      children: new FormControl(),
      infants: new FormControl(),
      pets: new FormControl(),
    });
  }
  onSubmit() {
    console.log(this.reserveDetailForm.value)
  }
  getRange(start: any, end: any) {
    let range = (start.getTime() - end.getTime()) / (1000 * 3600 * 24) * -1 + 1;
    return Math.ceil(range);
  }

  
}
