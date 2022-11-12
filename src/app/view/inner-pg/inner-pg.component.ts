import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardServiceService } from '../card-service.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-inner-pg',
  templateUrl: './inner-pg.component.html',
  styleUrls: ['./inner-pg.component.css'],
})
export class InnerPgComponent implements OnInit {
  card!: Card;
  constructor(
    private cardService: CardServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.card = this.cardService.getCard(params['id']);
    });
  }
}
