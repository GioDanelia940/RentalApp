import { Component, OnInit } from '@angular/core';
import { CardServiceService } from './card-service.service';
import { Card } from './card.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  cards!: Card[];
  constructor(private cardService: CardServiceService) {}

  ngOnInit(): void {
    this.cards = this.cardService.cards;
  }
}
