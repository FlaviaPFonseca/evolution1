import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TIRoutingModule } from './ti-routing.module';
import { TIComponent } from './ti.component';


@NgModule({
  declarations: [
    TIComponent
  ],
  imports: [
    CommonModule,
    TIRoutingModule,
    SharedModule
  ]
})
export class TIModule { }
