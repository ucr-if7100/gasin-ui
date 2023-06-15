import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserRoutingModule } from './user-routing.module';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchUserComponent } from './search-user/search-user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { MatStepperModule } from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    InsertUserComponent,
    SearchUserComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule ,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule ,
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
    MatTableModule

  ],exports: [UserRoutingModule]
})
export class UserModule { }
