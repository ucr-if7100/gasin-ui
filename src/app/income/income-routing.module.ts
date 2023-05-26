import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertIncomeComponent } from './insert-income/insert-income.component';

const routes: Routes = [{path:'insertIncome',component:InsertIncomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }
