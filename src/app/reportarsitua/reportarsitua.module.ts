import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarsituaPageRoutingModule } from './reportarsitua-routing.module';

import { ReportarsituaPage } from './reportarsitua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarsituaPageRoutingModule
  ],
  declarations: [ReportarsituaPage]
})
export class ReportarsituaPageModule {}
