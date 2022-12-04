import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseWorkerService } from 'src/app/sharedServices/firebase-worker.service';
import { AccountServiceService } from 'src/app/user-account/account-service.service';
import { User } from 'src/app/user-account/user.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  logged!: boolean;
  constructor(
    private router: Router,
    private accountService: AccountServiceService,
    private firebaseWorker: FirebaseWorkerService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('logged') === null) {
      this.logged = false;
    } else {
      this.logged = JSON.parse(<string>localStorage.getItem('logged'));
    }
    this.accountService.userLogged.subscribe((response) => {
      this.logged = response;
    });
  }
  toHomePage() {
    this.router.navigate(['']);
  }
  tologin() {
    this.router.navigate(['login']);
  }
  toRegister() {
    this.router.navigate(['register']);
  }
  toAccount() {
    this.router.navigate(['account']);
  }
  SignOut() {
    this.firebaseWorker.SignOut();
    this.accountService.userLogged.next(false);
    this.router.navigate(['']);
  }
}
