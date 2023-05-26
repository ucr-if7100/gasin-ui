import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { InsertExpenseComponent } from './insert-expense/insert-expense.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    InsertExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports: [ExpenseRoutingModule]
})
export class ExpenseModule { }
