import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-noticias-especificas',
  templateUrl: './noticias-especificas.page.html',
  styleUrls: ['./noticias-especificas.page.scss'],
})
export class NoticiasEspecificasPage implements OnInit {
  noticiasE: any;

  constructor(private apiService: ApiService) {}


  ngOnInit() {
    this.apiService.getNoticiasEspecificas().subscribe(
      (noticiasResponse) => {
        // Asignar las noticias recibidas a la propiedad noticias para mostrar en la interfaz
        this.noticiasE = noticiasResponse.datos; // Ajusta según la estructura de la respuesta
      },
      (error) => {
        console.error('Error al obtener noticias específicas:', error);
      }
    );
  }

}
