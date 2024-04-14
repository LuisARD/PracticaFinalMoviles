import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersviewPageRoutingModule } from './membersview-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MembersviewPage } from './membersview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersviewPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MembersviewPage]
})
export class MembersviewPageModule {}
