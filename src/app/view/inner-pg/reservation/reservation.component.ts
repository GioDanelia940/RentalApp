import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  paramsId!:string
  totalPrice!:number
  constructor(private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.paramsId = params['id'])
    this.reserveDetailForm = new FormGroup({
      range: new FormGroup({
        start: new FormControl(new Date()),
        end: new FormControl(new Date()),
      }),
      adults: new FormControl(),
      children: new FormControl(),
      infants: new FormControl(),
      pets: new FormControl(),
      price: new FormControl(this.totalPrice),
    });
  }
  onSubmit() {
    let formValue = this.reserveDetailForm.value;
    let jsonStr = JSON.stringify(formValue, (key, value) => {
      if (value !== null && value !== 'Any') {
        return value;
      }
    });
    console.log(formValue)
    localStorage.setItem('payments',jsonStr)
    this.router.navigate([`/payments/${this.paramsId}`])
  }

  getRange(start: any, end: any) {
    let range = (start.getTime() - end.getTime()) / (1000 * 3600 * 24) * -1 + 1;
    this.reserveDetailForm.controls['price'].setValue(range * this.payOnDay + 163)  
    return Math.ceil(range);
  }

  
}
