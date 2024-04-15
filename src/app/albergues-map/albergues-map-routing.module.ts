import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlberguesMapPage } from './albergues-map.page';

const routes: Routes = [
  {
    path: '',
    component: AlberguesMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlberguesMapPageRoutingModule {}
