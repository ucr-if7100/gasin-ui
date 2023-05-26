import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InsertIncomeComponent } from './insert-income/insert-income.component';


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
  ],
  exports: [IncomeRoutingModule]

})
export class IncomeModule { }
