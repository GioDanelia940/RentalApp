import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  @Input() sliderImages!: string[];
  @Input() height!: string;
  @Input() width!: string;
  @Input() cardId!:string

  constructor(private router:Router, private route:ActivatedRoute) {}


  ngOnInit(): void {

  }

  toInnerPage(){
    this.router.navigate([this.cardId],{relativeTo:this.route})
    
  }
}
