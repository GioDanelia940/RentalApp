import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiServiceService } from 'src/app/sharedServices/cardApiService/api-service.service';
import { CardServiceService } from '../card-service.service';
import { Card } from '../card.model';
import {
  faPerson,
  faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
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
  constructor(
    private cardService: CardServiceService,
    private route: ActivatedRoute,
    private ApiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.ApiService.getHotelById(params['id']).subscribe((result) => {
        this.card = result;
        console.log(this.card)
      });
    });
  }
}
