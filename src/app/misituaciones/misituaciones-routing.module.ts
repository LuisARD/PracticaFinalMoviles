import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisituacionesPage } from './misituaciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisituacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisituacionesPageRoutingModule {}
