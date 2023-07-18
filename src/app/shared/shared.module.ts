import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from './pipes/full-name.pipe';
import { ValidationsPipe } from './pipes/validations.pipe';
import { FontSizeDirective } from './directives/font-size.directive';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    FullNamePipe,
    ValidationsPipe,
    FontSizeDirective
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    FullNamePipe,
    ValidationsPipe,
    FontSizeDirective,
    MatSelectModule
  ]
})
export class SharedModule { }