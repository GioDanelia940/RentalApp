import { Component, OnInit } from '@angular/core';
import {
  faArrowCircleDown,
  faArrowRightArrowLeft,
  faGlassMartini,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  //dummy filter array
  filterItems: any[] = [
    faGlassMartini,
    faArrowRightArrowLeft,
    faArrowCircleDown,
    faGlassMartini,
    faArrowRightArrowLeft,
    faArrowCircleDown,
    faGlassMartini,
    faArrowRightArrowLeft,
    faArrowCircleDown,
  ];
  constructor() {}

  ngOnInit(): void {}
}
