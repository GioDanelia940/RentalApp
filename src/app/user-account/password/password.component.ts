import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseWorkerService } from 'src/app/sharedServices/firebase-worker.service';
import { AccountServiceService } from '../account-service.service';
import { User } from '../user.model';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
})
export class PasswordComponent implements OnInit {
  hide: boolean = true;
  user: User = new User('1', '', '', true, '', '', '', '', '', '');
  @ViewChild('formDirective') formDirective: NgForm | undefined;
  changeDetails: boolean = false;
  constructor(
    private accountService: AccountServiceService,
    private firebaseWorker: FirebaseWorkerService,
    private router: Router
  ) {}
  userPasswordForm!: FormGroup;
  ngOnInit(): void {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem(
        'user',
        JSON.stringify(new User('1', '', '', true, '', '', '', '', '', ''))
      );
      this.user = JSON.parse(<string>localStorage.getItem('user'));
    } else {
      this.user = JSON.parse(<string>localStorage.getItem('user'));
    }
    this.userPasswordForm = new FormGroup({
      oldPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern(this.user.password),
      ]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
      ]),
      newPasswordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
      ]),
    });
  }
  onSubmit() {
    let tempUser = new User(
      this.user.id,
      this.user.email,
      this.userPasswordForm.get('newPassword')?.value,
      true,
      this.user.firstName,
      this.user.lastName,
      this.user.country,
      this.user.city,
      this.user.cardType,
      this.user.cardNumber
    );
    this.firebaseWorker.update(tempUser, this.user.id);
    this.firebaseWorker.updateFirePassword(tempUser.password);
    this.changeDetails = false;
    this.userPasswordForm.reset();
    this.formDirective?.resetForm();
    localStorage.setItem('user', JSON.stringify(tempUser));
  }
  changeToggle() {
    this.changeDetails = !this.changeDetails;
  }
  changeHide() {
    this.hide = !this.hide;
  }
}
