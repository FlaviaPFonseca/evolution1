import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailSignatureRoutingModule } from './email-signature-routing.module';
import { EmailSignatureComponent } from './email-signature.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmailSignatureComponent
  ],
  imports: [
    CommonModule,
    EmailSignatureRoutingModule,
    SharedModule
  ]
})
export class EmailSignatureModule { }
