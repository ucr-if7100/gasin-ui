import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IngresosRoutingModule } from './ingresos-routing.module';
import { IngresarGastosComponent } from '../gastos/ingresar-gastos/ingresar-gastos.component';
import { GastosRoutingModule } from '../gastos/gastos-routing.module';
import { RegistrarIngresosComponent } from './registrar-ingresos/registrar-ingresos/registrar-ingresos.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    RegistrarIngresosComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    IngresosRoutingModule,
    MatIconModule,MatButtonModule
  
  ] , 
  exports: [IngresosRoutingModule]

})
export class IngresosModule { }
