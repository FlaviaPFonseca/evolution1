import { KeyusersComponent } from './keyusers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyusersModule } from './keyusers.module';

const routes: Routes = [{
  path:'',component:KeyusersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyusersRoutingModule { }
