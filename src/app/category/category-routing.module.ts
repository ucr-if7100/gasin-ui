import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertCategoryComponent } from './insert-category/insert-category.component';
import { SearchCategoryComponent } from './search-category/search-category/search-category.component';
import { UpdateCategoryComponent } from './update-category/update-category/update-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category/delete-category.component';

const routes: Routes =  [{path:'insertCategory',component:InsertCategoryComponent}
,{path:'searchCategory',component:SearchCategoryComponent},
{path:'updateCategory/:id',component:UpdateCategoryComponent},
{path:'deleteCategory/:id',component:DeleteCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
