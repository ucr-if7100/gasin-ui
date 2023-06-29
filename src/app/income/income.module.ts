import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InsertIncomeComponent } from './insert-income/insert-income.component';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchIncomeComponent } from './search-income/search-income.component'; //

import { MatStepperModule } from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { UpdateIncomeComponent } from './update-income/update-income.component';
import { SeeIncomeComponent } from './see-income/see-income.component';
import { DeleteIncomeComponent } from './delete-income/delete-income.component';
@NgModule({
  declarations: [


    InsertIncomeComponent,
        SearchIncomeComponent,
        UpdateIncomeComponent,
        SeeIncomeComponent,
        DeleteIncomeComponent
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
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    FormsModule
  ],
  exports: [IncomeRoutingModule]

})
export class IncomeModule { }
