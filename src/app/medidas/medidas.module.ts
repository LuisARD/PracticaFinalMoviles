import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedidasPageRoutingModule } from './medidas-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MedidasPage } from './medidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedidasPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MedidasPage]
})
export class MedidasPageModule {}
