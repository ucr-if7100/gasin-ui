import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RegisterAccountComponent } from "./components/register-account/register-account.component";
import { EditAccountComponent } from "./components/edit-account/edit-account.component";

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'profile', component: DashboardComponent},
    {path: 'transactions', component: DashboardComponent},
    {path: 'accounts', component: DashboardComponent},
    {path: 'addAccount', component: RegisterAccountComponent},
    {path: 'editAccount/:accountId', component: EditAccountComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
