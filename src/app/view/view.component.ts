import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../sharedServices/cardApiService/api-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  cards!: any[];
  constructor(private http:ApiServiceService) {}

  ngOnInit(): void {
   this.http.getAllHotels().subscribe(response => this.cards = response)
  }

  
}
