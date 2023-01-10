import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  fixedPos:boolean = true
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event:any) => {
      if (event instanceof RoutesRecognized) {
        console.log(event.url)
        if(event.url == '/view' || event.url.substring(0,6) == '/view?'){
          this.fixedPos = true
        }else{
          this.fixedPos = false
        }
      }
    })
  }
}
