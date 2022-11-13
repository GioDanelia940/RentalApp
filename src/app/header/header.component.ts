import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterServiceService } from './filter/filter-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  displayFilter: Boolean = true;
  constructor(
    private filterService: FilterServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filterService.displayed.subscribe((condition: Boolean) => {
      this.displayFilter = condition;
    });
  }
  checkDisplay() {
    if (this.router.url == '/view') {
      return true;
    } else {
      return this.displayFilter;
    }
  }
}
