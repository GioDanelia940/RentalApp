import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterServiceService {
  displayed: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor() {}
}
