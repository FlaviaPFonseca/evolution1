import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivedirectoryRoutingModule } from './activedirectory-routing.module';
import { ActivedirectoryComponent } from './activedirectory.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ActivedirectoryComponent
  ],
  imports: [
    CommonModule,
    ActivedirectoryRoutingModule,
    SharedModule
  ]
})
export class ActivedirectoryModule { }
