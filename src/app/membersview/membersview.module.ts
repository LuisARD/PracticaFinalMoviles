import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersviewPageRoutingModule } from './membersview-routing.module';

import { MembersviewPage } from './membersview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersviewPageRoutingModule
  ],
  declarations: [MembersviewPage]
})
export class MembersviewPageModule {}
