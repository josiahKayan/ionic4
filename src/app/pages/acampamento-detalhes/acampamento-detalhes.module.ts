import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AcampamentoDetalhesPage } from './acampamento-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: AcampamentoDetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AcampamentoDetalhesPage]
})
export class AcampamentoDetalhesPageModule {}
