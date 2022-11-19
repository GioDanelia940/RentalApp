import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatDialogModule, MatCardModule,MatRadioModule],
})
export class MaterialModule {}
