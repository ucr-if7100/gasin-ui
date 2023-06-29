import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EmailForwardingComponent } from "./help/email-forwarding/email-forwarding.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { EditAccountComponent } from "./components/account/edit-account/edit-account.component";
import { RegisterAccountComponent } from "./components/account/register-account/register-account.component";
import { ViewAccountComponent } from "./components/account/view-account/view-account.component";

import { CommonModule } from '@angular/common';


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'emailForwarding', component: EmailForwardingComponent},
    {path: 'profile', component: DashboardComponent},
    {path: 'transactions', component: DashboardComponent},
    {path: 'accounts', component: DashboardComponent},
    {path: 'addAccount', component: RegisterAccountComponent},
    {path: 'editAccount/:accountId', component: EditAccountComponent},
    {path: 'viewAccount/:accountId', component: ViewAccountComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),CommonModule],
    exports: [RouterModule]
})

export class AppRoutingModule { }

