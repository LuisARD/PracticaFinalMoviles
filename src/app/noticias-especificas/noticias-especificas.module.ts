import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasEspecificasPageRoutingModule } from './noticias-especificas-routing.module';

import { NoticiasEspecificasPage } from './noticias-especificas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasEspecificasPageRoutingModule
  ],
  declarations: [NoticiasEspecificasPage]
})
export class NoticiasEspecificasPageModule {}
