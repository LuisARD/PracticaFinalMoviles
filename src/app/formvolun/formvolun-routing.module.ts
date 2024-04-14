import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormvolunPage } from './formvolun.page';

const routes: Routes = [
  {
    path: '',
    component: FormvolunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormvolunPageRoutingModule {}
