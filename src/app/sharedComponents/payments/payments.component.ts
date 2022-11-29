import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardServiceService } from 'src/app/view/card-service.service';

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
  cardEl!:any

  constructor(private cardService: CardServiceService) {}

  ngOnInit(): void {
    this.cardEl = this.cardService.getCard(0)
    console.log(this.cardEl)
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

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
