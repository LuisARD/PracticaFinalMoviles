import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisituacionesPageRoutingModule } from './misituaciones-routing.module';

import { MisituacionesPage } from './misituaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisituacionesPageRoutingModule
  ],
  declarations: [MisituacionesPage]
})
export class MisituacionesPageModule {}
