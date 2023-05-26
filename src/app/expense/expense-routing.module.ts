import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertExpenseComponent } from './insert-expense/insert-expense.component';

const routes: Routes = [{path:'insertexpense',component:InsertExpenseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
