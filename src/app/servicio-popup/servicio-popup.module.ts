import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ServicioPopupComponent } from './servicio-popup.component';


@NgModule({
  declarations: [
    ServicioPopupComponent
  ],
  imports: [
    CommonModule,
    IonicModule // Asegúrate de importar IonicModule aquí
  ],
  exports: [
    ServicioPopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicioPopupModule {}
