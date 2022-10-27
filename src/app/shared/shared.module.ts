import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeaderComponent } from './myHeader/my-header.component';
import { MyFooterComponent } from './myFooter/my-footer.component';



@NgModule({
  declarations: [
    MyHeaderComponent,
    MyFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    

  ],
  exports:[
    MyFooterComponent,
    MyHeaderComponent,
    ]
})
export class SharedModule { }
