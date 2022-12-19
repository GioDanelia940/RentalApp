import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Inject,
  inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.css'],
})
export class DescriptionModalComponent implements OnInit {
  description!: string;
  constructor(
    private dialogRef: MatDialogRef<DescriptionModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    this.description = this.data.text;
  }
}
