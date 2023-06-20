import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RegisterAccountComponent } from "./components/register-account/register-account.component";

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'profile', component: DashboardComponent},
    {path: 'transactions', component: DashboardComponent},
    {path: 'accounts', component: DashboardComponent},
    {path: 'addAccount', component: RegisterAccountComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
