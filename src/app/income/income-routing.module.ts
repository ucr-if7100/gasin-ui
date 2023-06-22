import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertIncomeComponent } from './insert-income/insert-income.component';
import { SearchIncomeComponent } from './search-income/search-income.component';

const routes: Routes = [{path:'insertIncome',component:InsertIncomeComponent},
{path:'searchIncome',component:SearchIncomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }

