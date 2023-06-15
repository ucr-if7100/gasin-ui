import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertCategoryComponent } from './insert-category/insert-category.component';
import { SearchCategoryComponent } from './search-category/search-category/search-category.component';

const routes: Routes =  [{path:'insertCategory',component:InsertCategoryComponent},{path:'searchCategory',component:SearchCategoryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
