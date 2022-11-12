import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  faArrowCircleDown,
  faArrowRightArrowLeft,
  faGlassMartini,
} from '@fortawesome/free-solid-svg-icons';
import { FilterModalComponent } from './filter-modal/filter-modal.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  //dummy filter array
  filterItems: any[] = [
    faGlassMartini,
    faArrowRightArrowLeft,
    faArrowCircleDown,
    faGlassMartini,
    faArrowRightArrowLeft,
    faArrowCircleDown,
    faGlassMartini,
    faArrowRightArrowLeft,
    faArrowCircleDown,
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(FilterModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
