import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule',canActivate:[LoginGuard] },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule',canActivate:[AuthGuard] },
  // { path: 'inscricao', loadChildren: './pages/inscricao/inscricao.module#InscricaoPageModule',canActivate:[AuthGuard] },
  { path: 'acampamento', loadChildren: './pages/acampamento/acampamento.module#AcampamentoPageModule',canActivate:[AuthGuard] },
  { path: 'inscricao/:id/:add', loadChildren: './pages/inscricao/inscricao.module#InscricaoPageModule',canActivate:[AuthGuard] },
  { path: 'inscricao/:id/:list', loadChildren: './pages/inscricao/inscricao.module#InscricaoPageModule',canActivate:[AuthGuard] },
  { path: 'acampamento-detalhes', loadChildren: './pages/acampamento-detalhes/acampamento-detalhes.module#AcampamentoDetalhesPageModule',canActivate:[AuthGuard] },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
