import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { IngresarGastosComponent } from './ingresar-gastos/ingresar-gastos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    IngresarGastosComponent,


  ],
  imports: [
    CommonModule,
    GastosRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule

  ],
  exports: [GastosRoutingModule]

})
export class GastosModule { }
