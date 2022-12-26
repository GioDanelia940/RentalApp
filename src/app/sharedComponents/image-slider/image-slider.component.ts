import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  constructor() {}
  @Input() sliderImages!: string[];
  @Input() height!: string;
  @Input() width!: string;

  ngOnInit(): void {}
}
