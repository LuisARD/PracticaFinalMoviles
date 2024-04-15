import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlberguesPageRoutingModule } from './albergues-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AlberguesPage } from './albergues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlberguesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AlberguesPage]
})
export class AlberguesPageModule {}
