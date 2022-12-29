import { Component, OnInit } from '@angular/core';
import { Order } from './order.model';
import { ApiServiceService } from '../../sharedServices/cardApiService/api-service.service';
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
})
export class OrderHistoryComponent implements OnInit {
  orders: Order[] = [
    new Order('ef4ce06a-bb68-47bb-9c06-1e9b6e39ce8f', 2, 500),
    new Order('ef4ce06a-bb68-47bb-9c06-1e9b6e39ce8f', 2, 500),
    new Order('ef4ce06a-bb68-47bb-9c06-1e9b6e39ce8f', 2, 500),
    new Order('ef4ce06a-bb68-47bb-9c06-1e9b6e39ce8f', 2, 500),
    new Order('ef4ce06a-bb68-47bb-9c06-1e9b6e39ce8f', 2, 500),
    new Order('ef4ce06a-bb68-47bb-9c06-1e9b6e39ce8f', 2, 500),
  ];
  hotels!: any[];
  constructor(private http: ApiServiceService) {}

  ngOnInit(): void {
    this.http.getAllHotels().subscribe((response: any) => {
      this.hotels = response;
    });
  }
  getHotelById(id: string) {
    return this.hotels.filter((hotel) => hotel.id == id)[0];
  }
}
