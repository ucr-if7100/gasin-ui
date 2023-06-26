import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertExpenseComponent } from './insert-expense/insert-expense.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { DeleteExpenseComponent } from './delete-expense/delete-expense.component';
import { SeeExpenseComponent } from './see-expense/see-expense.component';
import { SearchCategoryComponent } from '../category/search-category/search-category/search-category.component';
import { SearchExpenseComponent } from './search-expense/search-expense.component';

const routes: Routes = [
  {path:'insertExpense',component:InsertExpenseComponent},
  {path:'updatetExpense/:id',component:UpdateExpenseComponent},
  {path:'deleteExpense/:id',component:DeleteExpenseComponent},
  {path:'seeExpense/:id',component:SeeExpenseComponent},
  {path:'searchExpense',component:SearchExpenseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
