import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let now: any = new Date();
    let hours = 24;
    let setupTime: any = localStorage.getItem('setupTime');
    if (now - setupTime > hours * 3600 * 1000) {
      localStorage.removeItem('payments');
    }
  }
  title = 'RentalApp';
}
