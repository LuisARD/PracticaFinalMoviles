import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormvolunPageRoutingModule } from './formvolun-routing.module';

import { FormvolunPage } from './formvolun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormvolunPageRoutingModule
  ],
  declarations: [FormvolunPage]
})
export class FormvolunPageModule {}
