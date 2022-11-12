import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterServiceService } from 'src/app/header/filter/filter-service.service';
import { Card } from '../card.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  @Input() card!: Card;
  @Input() index!: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filterService: FilterServiceService
  ) {}

  ngOnInit(): void {}
  toInnerPage(index: number) {
    this.router.navigate([index], { relativeTo: this.route });
    this.filterService.displayed.emit(false);
  }
}
