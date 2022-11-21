import { Component, OnInit } from '@angular/core';
import { PhoneIndexService } from 'src/app/sharedServices/accountServices/phone-index.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {
  payFull: boolean = true;
  payPart: boolean = false;
  selectedValue!:string
  phoneIndexArr:any[] = []
  test!:string
  constructor(private phoneIndexService: PhoneIndexService) {}

  ngOnInit(): void {
    this.phoneIndexArr = this.phoneIndexService.phoneIndex
  }

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

}
