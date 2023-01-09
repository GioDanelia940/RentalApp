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
  @Input() cardId!: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  toInnerPage() {
    if (
      this.router.url.substring(0, 5) == '/view' &&
      this.router.url.length < 7
    ) {
      this.router.navigate([this.cardId], { relativeTo: this.route });
    }
  }
}
