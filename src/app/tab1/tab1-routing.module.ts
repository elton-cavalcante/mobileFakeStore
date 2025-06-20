import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ProdutoDetalhesComponent } from '../produto-detalhes/produto-detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  },
  {
    path: 'produto-detalhes/:id',
    component: ProdutoDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
