import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterServiceService } from '../header/filter/filter-service.service';
import { ApiServiceService } from '../sharedServices/cardApiService/api-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  cards!: any[];
  constructor(private http:ApiServiceService, private route:ActivatedRoute,private filterS:FilterServiceService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      if (response['Id']) {
        this.filterS.filterByCategoryId(response['Id']).subscribe((response:any) => this.cards = response);
      } else {
        this.http.getAllHotels().subscribe((response) => this.cards = response);
      }
    });
  }

  
}
