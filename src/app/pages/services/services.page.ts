import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicioPopupComponent } from '../../servicio-popup/servicio-popup.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})

export class ServicesPage implements OnInit {

  constructor(public modalController: ModalController) { }
  retroConstructor() {}

  async abrirVentanaEmergente(servicio: string, descripcion: string) {
    const modal = await this.modalController.create({
      component: ServicioPopupComponent      
    });

    modal.componentProps = {
      servicio: servicio,
      descripcion: descripcion
    }
    return await modal.present();
  }

  public cerrarVentanaEmergente() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }
}
