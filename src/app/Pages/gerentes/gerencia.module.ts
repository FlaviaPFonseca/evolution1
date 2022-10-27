import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciaRoutingModule } from './gerencia-routing.module';
import { GerenciaComponent } from './gerencia.component';


@NgModule({
  declarations: [
    GerenciaComponent
  ],
  imports: [
    CommonModule,
    GerenciaRoutingModule,
    SharedModule
  ]
})
export class GerenciaModule { }
