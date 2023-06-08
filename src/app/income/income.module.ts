import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InsertIncomeComponent } from './insert-income/insert-income.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; //


@NgModule({
  declarations: [


    InsertIncomeComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule ,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [IncomeRoutingModule]

})
export class IncomeModule { }
