import { Injectable, EventEmitter } from '@angular/core';
import {
  faArrowCircleDown,
  faArrowRightArrowLeft,
  faGlassMartini,
} from '@fortawesome/free-solid-svg-icons';
import { FilterItem } from './filterItem.model';
@Injectable({
  providedIn: 'root',
})
export class FilterServiceService {
  filterItems: FilterItem[] = [
    new FilterItem(faGlassMartini, 'placeHolder'),
    new FilterItem(faArrowRightArrowLeft, 'placeHolder'),
    new FilterItem(faArrowCircleDown, 'placeHolder'),
    new FilterItem(faGlassMartini, 'placeHolder'),
    new FilterItem(faArrowRightArrowLeft, 'placeHolder'),
    new FilterItem(faArrowCircleDown, 'placeHolder'),
    new FilterItem(faGlassMartini, 'placeHolder'),
    new FilterItem(faArrowRightArrowLeft, 'placeHolder'),
    new FilterItem(faArrowCircleDown, 'placeHolder'),
  ];
  displayed: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor() {}
}
