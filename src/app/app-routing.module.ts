
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'transactions', component: DashboardComponent} //change the component when ready
];

@NgModule({
    imports: [RouterModule.forRoot(routes),CommonModule],
    exports: [RouterModule]
})

export class AppRoutingModule { }

