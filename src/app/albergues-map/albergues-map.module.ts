import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlberguesMapPageRoutingModule } from './albergues-map-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AlberguesMapPage } from './albergues-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlberguesMapPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AlberguesMapPage]
})
export class AlberguesMapPageModule {}
