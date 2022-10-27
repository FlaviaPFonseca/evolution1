import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemaisacoesRoutingModule } from './demaisacoes-routing.module';
import { DemaisacoesComponent } from './demaisacoes.component';


@NgModule({
  declarations: [
    DemaisacoesComponent
  ],
  imports: [
    CommonModule,
    DemaisacoesRoutingModule
  ]
})
export class DemaisacoesModule { }
