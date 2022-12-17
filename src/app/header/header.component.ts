import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  testSubject :Subject<boolean> = new Subject<boolean>()
  checkHeader:boolean = true
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.testSubject.subscribe(response => this.checkHeader = response)
  }
  checkDisplay() {
    if (this.router.url.substring(0,5) == '/view' && this.router.url.length == 5) {
      this.testSubject.next(true)
      return true;
    } else if(this.router.url.substring(0,6) == '/view?') {
      this.testSubject.next(true)
      return true;
    }else{
      this.testSubject.next(false)
      return false
    }
  }
}
