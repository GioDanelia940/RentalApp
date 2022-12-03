import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseWorkerService } from 'src/app/sharedServices/firebase-worker.service';
import { AccountServiceService } from '../account-service.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user!: User;
  constructor(
    private firebaseWorker: FirebaseWorkerService,
    private accountService: AccountServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onFormSubmit(form: NgForm) {
    this.firebaseWorker
      .signIn(form.value.email, form.value.password)
      .then((result) => {
        console.log('sign in was called');
        result.subscribe((user: any) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.accountService.userUpdated.next(
            JSON.parse(<string>localStorage.getItem('user'))
          );
          this.accountService.userLogged.next(true);
        });
      });
  }
}
