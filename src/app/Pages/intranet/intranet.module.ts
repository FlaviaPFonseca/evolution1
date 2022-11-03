import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';


@NgModule({
  declarations: [
    IntranetComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    SharedModule
  ]
})
export class IntranetModule { }
