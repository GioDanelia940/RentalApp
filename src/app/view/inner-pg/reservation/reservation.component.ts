import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  @Input() payOnDay = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  adultCount: number = 0;
  childrenCount:number = 0;
  infantsCount:number = 0;
  petCount:number = 0;

  betweenDays:number = 0;
  wholePrice:number = 0;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  calculateWholePrice(){
    var count = this.adultCount +  this.childrenCount +  this.infantsCount +  this.petCount;

    var startDate = this.range.value.start;
    var endDate = this.range.value.end;

    if(endDate != undefined && endDate != null){
      return;
    }
    if(startDate != undefined && startDate != null){
      return;
    }
    // var timeBetweenDates = endDate.getTime() - startDate.getTime();
    // var daysOnDates = timeBetweenDates / (1000 * 3600 * 24);

    // this.betweenDays = daysOnDates;
    // this.wholePrice = count * daysOnDates * this.payOnDay;
  }
}
