import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { InsertExpenseComponent } from './insert-expense/insert-expense.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { SeeExpenseComponent } from './see-expense/see-expense.component';
import { DeleteExpenseComponent } from './delete-expense/delete-expense.component';
import { SearchExpenseComponent } from './search-expense/search-expense.component';
import { CategoryRoutingModule } from '../category/category-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [
    InsertExpenseComponent,
    UpdateExpenseComponent,
    SeeExpenseComponent,
    DeleteExpenseComponent,
    SearchExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    CategoryRoutingModule,
    MatIconModule,
    MatButtonModule ,
    MatPaginatorModule,
    MatStepperModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule



  ],
  exports: [ExpenseRoutingModule]
})
export class ExpenseModule { }
