import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  payFull: boolean = true;
  payPart: boolean = false;
  selectedValue!: string;
  phoneIndexArr: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  inputChecked(input: any) {
    if (input.value == 1) {
      this.payFull = true;
      this.payPart = false;
    } else {
      this.payFull = false;
      this.payPart = true;
    }
    return (input.checked = true);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
