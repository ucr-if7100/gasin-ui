import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmailForwardingComponent } from "./help/email-forwarding/email-forwarding.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RegisterAccountComponent } from "./components/register-account/register-account.component";
import { EditAccountComponent } from "./components/edit-account/edit-account.component";

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'emailForwarding', component: EmailForwardingComponent},
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
