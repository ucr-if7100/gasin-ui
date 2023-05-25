import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarIngresosComponent } from './registrar-ingresos/registrar-ingresos/registrar-ingresos.component';

const routes: Routes = [{path:'registrarIngresos',component:RegistrarIngresosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresosRoutingModule { }
