import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SituacionesMapaPageRoutingModule } from './situaciones-mapa-routing.module';

import { SituacionesMapaPage } from './situaciones-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SituacionesMapaPageRoutingModule
  ],
  declarations: [SituacionesMapaPage]
})
export class SituacionesMapaPageModule {}
