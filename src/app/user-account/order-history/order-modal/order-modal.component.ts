import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css'],
})
export class OrderModalComponent implements OnInit {
  faXmark: any = faXmark;
  order!:any;
  hotel!:any;
  constructor(
    private dialogRef: MatDialogRef<OrderModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    this.order = this.data.order;
    this.hotel=this.data.hotel;
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
