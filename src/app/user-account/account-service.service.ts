import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountServiceService {
  userUpdated: Subject<User> = new Subject<User>();
  users: User[] = [
    new User(
      'gioDan@email',
      '12345',
      'gio',
      'danelia',
      'Georgia',
      'Tbilisi',
      'masterCard',
      '0000-0000-0000-0000'
    ),
    new User(
      'gioAdu@email',
      '12345',
      'gio',
      'Aduashvili',
      'Georgia',
      'Tbilisi',
      'masterCard',
      '0000-0000-0000-0000'
    ),
    new User(
      'gioUtsu@email',
      '12345',
      'gio',
      'utsunashvili',
      'Georgia',
      'Tbilisi',
      'masterCard',
      '0000-0000-0000-0000'
    ),
    new User(
      'qetiBar@email',
      '12345',
      'qeti',
      'barbakadze',
      'Georgia',
      'Tbilisi',
      'masterCard',
      '0000-0000-0000-0000'
    ),
  ];
  currentUser: User = this.users[0];
  currentIndex: number = 0;
  updateUser(user: User) {
    this.users[this.currentIndex] = user;
    this.currentUser = this.users[this.currentIndex];
    localStorage.setItem('user', JSON.stringify(this.currentUser));
    this.userUpdated.next(this.currentUser);
  }
  getCurrentUser() {
    return this.currentUser;
  }
  constructor() {}
}
