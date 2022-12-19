import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { FilterServiceService } from './filter-service.service';
import { FilterItem } from './filterItem.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  //dummy filter array
  filterItems!: FilterItem[];
  constructor(
    public dialog: MatDialog,
    private filterService: FilterServiceService
  ) {}

  ngOnInit(): void {
    this.filterItems = this.filterService.filterItems;
  }

  openDialog() {
    const dialogRef = this.dialog.open(FilterModalComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
