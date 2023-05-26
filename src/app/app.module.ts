import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { ExpenseModule } from './expense/expense.module';




const appRoutes:Routes=[




]

@NgModule({
  declarations: [
    AppComponent,






  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ExpenseModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
