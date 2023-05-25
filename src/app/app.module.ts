import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { GastosRoutingModule } from './gastos/gastos-routing.module';
import { GastosModule } from './gastos/gastos.module';
import { RegistrarIngresosComponent } from './Ingresos/registrar-ingresos/registrar-ingresos/registrar-ingresos.component';
import { IngresosModule } from './Ingresos/ingresos.module';

const appRoutes:Routes=[
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    GastosModule,
    IngresosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
