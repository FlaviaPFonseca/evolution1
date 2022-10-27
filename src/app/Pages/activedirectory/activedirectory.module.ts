import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivedirectoryRoutingModule } from './activedirectory-routing.module';
import { ActivedirectoryComponent } from './activedirectory.component';


@NgModule({
  declarations: [
    ActivedirectoryComponent
  ],
  imports: [
    CommonModule,
    ActivedirectoryRoutingModule
  ]
})
export class ActivedirectoryModule { }
