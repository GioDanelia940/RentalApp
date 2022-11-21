import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  users: User[] = [
    new User(
      'gio',
      'danelia',
      '12345',
      'Georgia',
      'Tbilisi',
      'masterCard',
      '0000-0000-0000-0000'
    ),
    new User(
      'gio',
      'Aduashvili',
      '12345',
      'Georgia',
      'Tbilisi',
      'masterCard',
      '0000-0000-0000-0000'
    ),
    new User(
      'gio',
      'utsunashvili',
      '12345',
      'Georgia',
      'Tbilisi',
      'masterCard',
      '0000-0000-0000-0000'
    ),
    new User(
      'qeti',
      'barbakadze',
      '12345',
      'Georgia',
      'Tbilisi',
      'masterCard',
      '0000-0000-0000-0000'
    ),
  ];
  currentUser: User = this.users[0];
  constructor() {}
}
