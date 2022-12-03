import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseWorkerService } from 'src/app/sharedServices/firebase-worker.service';
import { User } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private firebaseWorker: FirebaseWorkerService) {}

  ngOnInit(): void {}

  onFormSubmit(form: NgForm) {
    console.log(form);
    let tempUser: User = new User(
      1,
      form.value.email,
      form.value.password,
      true,
      '',
      '',
      '',
      '',
      '',
      ''
    );
    this.firebaseWorker.signUp(tempUser);
  }
}
