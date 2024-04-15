import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasEspecificasPage } from './noticias-especificas.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasEspecificasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasEspecificasPageRoutingModule {}
