import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  userUpdated: Subject<User> = new Subject<User>();
  currentIndex: number = 0;

  constructor() {}
}
