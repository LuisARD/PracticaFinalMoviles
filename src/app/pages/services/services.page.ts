import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicioPopupComponent } from '../../servicio-popup/servicio-popup.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})

export class ServicesPage implements OnInit {
  servicios: any;
  servicio: any;

  constructor(public modalController: ModalController,private http: HttpClient) {
    this.getDataServicios();
   }

  getDataServicios(){
    const url = 'https://adamix.net/defensa_civil/def/servicios.php';
    this.http.get<any>(url).subscribe(
      {
        next: resp => {
          this.servicios = resp.datos;
          console.log(this.servicios)
        },
        error: err => {
          console.log(err)
        }
      }
    );
  }

  async abrirVentanaEmergente(id: string) {
    const modal = await this.modalController.create({
      component: ServicioPopupComponent      
    });

    this.servicios.forEach((element: { id: any; }) => {
      if(element.id == id){
        this.servicio = element;
        modal.componentProps = {
          id: id,
          servicio: this.servicio
        }
      }
    });
    return await modal.present();
  }

  public cerrarVentanaEmergente() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }
}
