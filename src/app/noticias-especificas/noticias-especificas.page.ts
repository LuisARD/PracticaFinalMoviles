import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-noticias-especificas',
  templateUrl: './noticias-especificas.page.html',
  styleUrls: ['./noticias-especificas.page.scss'],
})
export class NoticiasEspecificasPage implements OnInit {
  noticias: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getNoticiasEspecificas().subscribe(
      (noticiasResponse) => {
        console.log('Respuesta de la API de noticias específicas:', noticiasResponse);
        // Asignar las noticias recibidas a la propiedad noticias para mostrar en la interfaz
        this.noticias = noticiasResponse; // Ajusta según la estructura de la respuesta
      },
      (error) => {
        console.error('Error al obtener noticias específicas:', error);
      }
    );
  }
}
