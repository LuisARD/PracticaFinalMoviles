import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesPage } from '../pages/services/services.page';

@Component({
  selector: 'app-servicio-popup',
  templateUrl: './servicio-popup.component.html',
  styleUrls: ['./servicio-popup.component.scss'],
})
export class ServicioPopupComponent {

  servicio: any;

  constructor(public modalController: ModalController) {}

  cerrarPopup() {
    this.modalController.dismiss();
  }
}