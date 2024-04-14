import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-servicio-popup',
  templateUrl: './servicio-popup.component.html',
  styleUrls: ['./servicio-popup.component.scss'],
})
export class ServicioPopupComponent {

  servicio: string = '';
  descripcion: string = '';

  constructor(public modalController: ModalController) {}

  cerrarVentanaEmergente() {
    this.modalController.dismiss();
  }
}