import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  @Input() payOnDay!:number;
  @Input() maxGuestCount: number = 0;
  dateSelection:boolean = false;
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
    console.log(this.reserveDetailForm.get('range')?.get('start')?.value);
  }
}
