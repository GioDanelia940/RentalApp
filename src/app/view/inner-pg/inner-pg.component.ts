import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiServiceService } from 'src/app/sharedServices/cardApiService/api-service.service';
import { CardServiceService } from '../card-service.service';
import { Card } from '../card.model';
import {
  faStar,
  faChildren,
  faPerson,
  faMedal,
  faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { AmenitiesModalComponent } from './amenities-modal/amenities-modal.component';
import { AircoverModalComponent } from './aircover-modal/aircover-modal.component';
import { DescriptionModalComponent } from './description-modal/description-modal.component';
@Component({
  selector: 'app-inner-pg',
  templateUrl: './inner-pg.component.html',
  styleUrls: ['./inner-pg.component.css'],
})
export class InnerPgComponent implements OnInit {
  card!: any;
  faPerson: any = faPerson;
  faArrowUpFromBracket: any = faArrowUpFromBracket;
  faHeart: any = faHeart;
  faStar: any = faStar;
  faMedal: any = faMedal;
  faCalendar: any = faCalendar;
  faChildren: any = faChildren;
  constructor(
    private dialog: MatDialog,
    private cardService: CardServiceService,
    private route: ActivatedRoute,
    private ApiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.ApiService.getHotelById(params['id']).subscribe((result) => {
        this.card = result;
        console.log(this.card);
      });
    });
  }
  personCount(room: Array<any>): number {
    let persons = 0;
    room.forEach((bedroom) => {
      persons += bedroom.personsCount;
    });
    return persons;
  }
  bedRoomCount(room: Array<any>): number {
    let beds = 0;
    room.forEach((bedroom) => {
      beds += bedroom.bedsCount;
    });
    return beds;
  }
  bathRoomCount(room: Array<any>): number {
    let baths = 0;
    room.forEach((bedroom) => {
      baths += bedroom.bathRoomsCount;
    });
    return baths;
  }
  childPolicy(rooms: Array<any>) {
    let text: string = 'Children are not allowed, ';
    rooms.forEach((element, index) => {
      if (element.childPolicy == true) {
        if (text === 'Children are not allowed, ') {
          text = 'Children are allowed in : ';
        }
        text += `room ${index + 1}, `;
      }
    });
    return text.substring(0, text.length - 2);
  }
  openDialogAmenities(offers: any): void {
    const dialogRef = this.dialog.open(AmenitiesModalComponent, {
      width: '780px',
      height: '800px',
      data: { offers: offers },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogAircover(): void {
    const dialogRef = this.dialog.open(AircoverModalComponent, {
      width: '1000px',
      height: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogDescription(text: string): void {
    const dialogRef = this.dialog.open(DescriptionModalComponent, {
      width: '1000px',
      data: { text: text },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  makeSubstring(text: String) {
    let newText = text.substring(0, 500);
    return newText.substring(0, newText.lastIndexOf(' '));
  }
}
