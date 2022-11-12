import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css'],
})
export class FilterModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form:NgForm){
    console.log(form.value)
  }
}
