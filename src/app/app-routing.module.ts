import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegisterAccountComponent } from "./register-account/register-account.component";
import { EmailForwardingComponent } from "./help/email-forwarding/email-forwarding.component";

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    //{path: 'transactions', component: DashboardComponent}, //change the component when ready
    {path: 'addAccount', component: RegisterAccountComponent},
    {path: 'emailForwarding', component: EmailForwardingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
