import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingEmitter: Subject<boolean> = new Subject<boolean>();
  loadings: Map<string, boolean> = new Map<string, boolean>();

  constructor() {}
  
  handle(url: string, loadingStatus: boolean): void {
    if (loadingStatus) {
      this.loadings.set(url, loadingStatus);
      this.loadingEmitter.next(true);
    } else if (!loadingStatus && this.loadings.has(url)) {
      this.loadings.delete(url);
    }

    if (this.loadings.size == 0) {
      this.loadingEmitter.next(false);
    }
  }
}
