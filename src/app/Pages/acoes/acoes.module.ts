import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { AcoesComponent } from './acoes.component';


@NgModule({
  declarations: [
    AcoesComponent
  ],
  imports: [
    CommonModule,
    AcoesRoutingModule,
    SharedModule
  ]
})
export class AcoesModule { }
