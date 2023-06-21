import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
<<<<<<< HEAD

import { DashboardComponent } from './dashboard/dashboard.component';
=======
import { DashboardComponent } from './components/dashboard/dashboard.component';
>>>>>>> 31f12d2a9e1c08d8bb78857de8b1ee8b6642d3d7
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule } from '@angular/material/table';

import {RouterModule} from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { AppRoutingModule } from './app-routing.module';


import { CoreModule } from './core/core.module';
import { ExpenseModule } from './expense/expense.module';

import { IncomeModule } from './income/income.module';
import { InsertUserComponent } from './user/insert-user/insert-user.component';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { Routes } from 'react-router-dom';


@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    SidebarComponent,
    /*TransactionsComponent,
    ProfileComponent,
    BankAccountComponent*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    RouterModule,
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ExpenseModule,
    IncomeModule,
    UserModule,
    CategoryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
