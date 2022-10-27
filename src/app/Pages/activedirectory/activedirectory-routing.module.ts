import { ActivedirectoryComponent } from './activedirectory.component';
import { AcoesComponent } from './../acoes/acoes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component:ActivedirectoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivedirectoryRoutingModule { }
