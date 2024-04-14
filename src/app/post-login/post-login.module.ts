import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostLoginPageRoutingModule } from './post-login-routing.module';

import { PostLoginPage } from './post-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostLoginPageRoutingModule
  ],
  declarations: [PostLoginPage]
})
export class PostLoginPageModule {}
