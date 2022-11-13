import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input() card!: Card;
  @Input() index!: number;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  toInnerPage(index: number) {
    this.router.navigate([index], { relativeTo: this.route });
  }
}