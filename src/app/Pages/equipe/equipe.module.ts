import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe.component';


@NgModule({
  declarations: [
    EquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    SharedModule
  ]
})
export class EquipeModule { }
