import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SituacionesMapaPage } from './situaciones-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: SituacionesMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SituacionesMapaPageRoutingModule {}
