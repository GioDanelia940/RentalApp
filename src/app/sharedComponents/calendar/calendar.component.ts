import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Output () dataEvent =new EventEmitter<Date[]>();
  public dateRange!: Date [];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  
  submitdata(){
    this.dataEvent.emit(this.dateRange);
  }


