import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarGastosComponent } from './ingresar-gastos/ingresar-gastos.component';

const routes: Routes = [ {path:'ingresargastos',component:IngresarGastosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastosRoutingModule { }
