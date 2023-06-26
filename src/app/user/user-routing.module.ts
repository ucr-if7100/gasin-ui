import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertUserComponent } from './insert-user/insert-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { SearchMemberComponent } from './search-member/search-member/search-member.component';

const routes: Routes = [{path:'insertUser',component:InsertUserComponent},
{path:'searchUser',component:SearchUserComponent},
{path:'profileUser',component:ProfileUserComponent},
{path:'registerMember',component:RegisterAccountComponent},
{path:'searchMember',component:SearchMemberComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
