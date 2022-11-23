import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountServiceService } from '../account-service.service';
import { User } from '../user.model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  user!: User;
  constructor(private accountService: AccountServiceService) {}
  userDetailForm!: FormGroup;
  ngOnInit(): void {
    if (localStorage.getItem('user') === null) {
      localStorage.setItem(
        'user',
        JSON.stringify(this.accountService.currentUser)
      );
      this.user = JSON.parse(<string>localStorage.getItem('user'));
    } else {
      this.user = JSON.parse(<string>localStorage.getItem('user'));
    }
    this.accountService.userUpdated.subscribe((updatedUser: User) => {
      this.user = updatedUser;
    });
    this.userDetailForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      lastName: new FormControl(this.user.lastName, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      country: new FormControl(this.user.country, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      city: new FormControl(this.user.city, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      card: new FormControl(this.user.cardType),
      cardNumber: new FormGroup({
        visa: new FormControl(this.user.cardNumber, [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(
            `[0-9][0-9][0-9][0-9]+-[0-9][0-9][0-9][0-9]+-[0-9][0-9][0-9][0-9]+-[0-9][0-9][0-9][0-9]`
          ),
        ]),
        masterCard: new FormControl(this.user.cardNumber, [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(
            '[0-9][0-9][0-9][0-9]+-[0-9][0-9][0-9][0-9]+-[0-9][0-9][0-9][0-9]+-[0-9][0-9][0-9][0-9]'
          ),
        ]),
        americanExpress: new FormControl(this.user.cardNumber, [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(
            '[0-9][0-9][0-9][0-9]+-[0-9][0-9][0-9][0-9]+-[0-9][0-9][0-9][0-9]+-[0-9][0-9][0-9][0-9]'
          ),
        ]),
      }),
    });
  }
  onSubmit() {
    this.accountService.updateUser(
      new User(
        this.user.email,
        this.user.password,
        this.userDetailForm.get('firstName')?.value,
        this.userDetailForm.get('lastName')?.value,
        this.userDetailForm.get('country')?.value,
        this.userDetailForm.get('city')?.value,
        this.userDetailForm.get('card')?.value,
        this.userDetailForm.get(
          `cardNumber.${this.userDetailForm.get('card')?.value}`
        )?.value
      )
    );
    console.log(this.accountService.users);
  }
}
