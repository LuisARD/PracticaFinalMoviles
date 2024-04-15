import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-misituaciones',
  templateUrl: './misituaciones.page.html',
  styleUrls: ['./misituaciones.page.scss'],
})
export class MisituacionesPage implements OnInit {
  situaciones: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMiSituaciones().subscribe(
      (res) => {
        // Asignar las noticias recibidas a la propiedad noticias para mostrar en la interfaz
        console.log('Respuesta de la API: ', res)
        this.situaciones = res.datos; // Ajusta según la estructura de la respuesta
      },
      (error) => {
        console.error('Error al obtener noticias específicas:', error);
      }
    );
  }

}
