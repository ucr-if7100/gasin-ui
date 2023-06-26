import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { AppRoutingModule } from './app-routing.module';
import { EmailForwardingComponent } from './help/email-forwarding/email-forwarding.component';


import { CoreModule } from './core/core.module';
import { ExpenseModule } from './expense/expense.module';

import { IncomeModule } from './income/income.module';
import { InsertUserComponent } from './user/insert-user/insert-user.component';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { Routes } from 'react-router-dom';

import { MatMenuModule } from '@angular/material/menu';

import { AccountService } from './services/account-service/account.service';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    SidebarComponent,
    EmailForwardingComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
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
    FormsModule,
    CoreModule,
    AppRoutingModule,
    ExpenseModule,
    IncomeModule,
    UserModule,
    CategoryModule,
    MatMenuModule

  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
