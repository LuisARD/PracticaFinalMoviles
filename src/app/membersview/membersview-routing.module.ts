import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersviewPage } from './membersview.page';

const routes: Routes = [
  {
    path: '',
    component: MembersviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersviewPageRoutingModule {}
