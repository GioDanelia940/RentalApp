import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseWorkerService } from 'src/app/sharedServices/firebase-worker.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private firebaseWorker: FirebaseWorkerService) {}

  ngOnInit(): void {}
  onFormSubmit(form: NgForm) {
    this.firebaseWorker
      .signIn(form.value.email, form.value.password)
      .then((result) => {
        result.subscribe((user: any) => {
          console.log(user);
        });
      });
  }
}
