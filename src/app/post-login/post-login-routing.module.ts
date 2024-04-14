import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostLoginPage } from './post-login.page';

const routes: Routes = [
  {
    path: '',
    component: PostLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostLoginPageRoutingModule {}
