import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertIncomeComponent } from './insert-income/insert-income.component';
import { SearchIncomeComponent } from './search-income/search-income.component';
import { UpdateIncomeComponent } from './update-income/update-income.component';
import { DeleteIncomeComponent } from './delete-income/delete-income.component';
import { SeeIncomeComponent } from './see-income/see-income.component';

const routes: Routes = [
{path:'insertIncome',component:InsertIncomeComponent},
{path:'searchIncome',component:SearchIncomeComponent},
{path:'updateIncome/:id',component:UpdateIncomeComponent},
{path:'deleteIncome/:id',component:DeleteIncomeComponent},
{path:'seeIncome/:id',component:SeeIncomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }

