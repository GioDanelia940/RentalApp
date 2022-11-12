import { Component, OnInit } from '@angular/core';
import { FilterServiceService } from './filter/filter-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  displayFilter: Boolean = true;
  constructor(private filterService: FilterServiceService) {}

  ngOnInit(): void {
    this.filterService.displayed.subscribe((condition: Boolean) => {
      this.displayFilter = condition;
    });
  }
}
