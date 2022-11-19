import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  payFull: boolean = true;
  payPart: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  inputChecked(input: any) {
    if (input.value == 1) {
      this.payFull = true;
      this.payPart = false;
    }else{
      this.payFull = false;
      this.payPart = true;
    }
    return (input.checked = true);
  }
}
