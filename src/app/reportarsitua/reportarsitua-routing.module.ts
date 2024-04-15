import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarsituaPage } from './reportarsitua.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarsituaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarsituaPageRoutingModule {}
