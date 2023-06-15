import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [{path:'insertUser',component:InsertUserComponent},
{path:'searchUser',component:SearchUserComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
