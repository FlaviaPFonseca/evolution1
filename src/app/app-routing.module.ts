
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'principal', pathMatch: 'full' },

  {
    path: 'principal', loadChildren: () => import("./Pages/home/home.module").then((m) => m.HomeModule)
  },
  { path: 'sobre', loadChildren: () => import("./Pages/about/about.module").then((m) => m.AboutModule) },

  {
    path: 'acoes', loadChildren: () => import("./Pages/acoes/acoes.module").then((m) => m.AcoesModule)
  },
  {
    path: 'contato', loadChildren: () => import("./Pages/contact/contact.module").then((m) => m.ContactModule)
  },
  {
    path: 'equipe', loadChildren: () => import("./Pages/equipe/equipe.module").then((m) => m.EquipeModule)
  },
  {
    path: 'servicos', loadChildren: () => import("./Pages/services/services.module").then((m) => m.ServicesModule)
  },
  {
    path: 'servicos/office', loadChildren: () => import("./Pages/office/office.module").then((m) => m.OfficeModule)
  },
  {
    path: 'servicos/intranet', loadChildren: () => import("./Pages/intranet/intranet.module").then((m) => m.IntranetModule)
  },
  {
    path: 'servicos/activedirectory', loadChildren: () => import("./Pages/activedirectory/activedirectory.module").then((m) => m.ActivedirectoryModule)
  },
  {
    path: 'servicos/demaisacoes', loadChildren: () => import("./Pages/demaisacoes/demaisacoes.module").then((m) => m.DemaisacoesModule)
  },
  {
    path: 'equipe/ti', loadChildren: () => import("./Pages/ti/ti.module").then((m) => m.TIModule)
  },
  {
    path: 'equipe/gerentes', loadChildren: () => import("./Pages/gerentes/gerencia.module").then((m) => m.GerenciaModule)
  },
  {
    path: 'equipe/keyusers', loadChildren: () => import("./Pages/keyusers/keyusers.module").then((m) => m.KeyusersModule)
  },
  {
    path: 'assinatura/email', loadChildren: () => import("./Pages/emailSignature/email-signature.module").then((m) => m.EmailSignatureModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
