import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './office.component';


@NgModule({
  declarations: [
    OfficeComponent
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    SharedModule
  ]
})
export class OfficeModule { }
