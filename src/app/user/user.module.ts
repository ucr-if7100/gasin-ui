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
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SeeUserComponent } from './see-user/see-user.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { FormsModule } from '@angular/forms';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { SearchMemberComponent } from './search-member/search-member/search-member.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { CategoryRoutingModule } from '../category/category-routing.module';
@NgModule({
  declarations: [
    InsertUserComponent,
    SearchUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    SeeUserComponent,
    ProfileUserComponent,
    RegisterAccountComponent,
    SearchMemberComponent
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
    MatTableModule,
    FormsModule,



    BrowserModule,

    MatNativeDateModule,
    CategoryRoutingModule,


  ],exports: [UserRoutingModule]
})
export class UserModule { }
