import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FilterServiceService } from '../filter/filter-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private router: Router,
    private filterService: FilterServiceService
  ) {}

  ngOnInit(): void {}
  toHomePage() {
    this.router.navigate(['']);
    this.filterService.displayed.emit(true);
  }
  tologin() {
    this.router.navigate(['login']);
    this.filterService.displayed.emit(false);
  }
  toRegister() {
    this.router.navigate(['register']);
    this.filterService.displayed.emit(false);
  }
}
