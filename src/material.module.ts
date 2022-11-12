import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatDialogModule, MatCardModule],
})
export class MaterialModule {}
