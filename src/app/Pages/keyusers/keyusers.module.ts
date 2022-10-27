import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyusersRoutingModule } from './keyusers-routing.module';
import { KeyusersComponent } from './keyusers.component';


@NgModule({
  declarations: [
    KeyusersComponent
  ],
  imports: [
    CommonModule,
    KeyusersRoutingModule,
    SharedModule
  ]
})
export class KeyusersModule { }
