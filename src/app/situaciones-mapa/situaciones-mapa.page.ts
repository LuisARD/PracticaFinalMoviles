import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-situaciones-mapa',
  templateUrl: './situaciones-mapa.page.html',
  styleUrls: ['./situaciones-mapa.page.scss'],
})
export class SituacionesMapaPage implements OnInit {
  map!: L.Map;
  situaciones: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getDatosMapa();
  }

  getDatosMapa(){
    this.apiService.getMiSituaciones().subscribe((res) => {
      this.situaciones = res.datos;
          this.loadMap();
    },
    (error) => {
      console.log('Error al obtener noticias específicas:', error);
    }
  );

  }

  loadMap() {
    this.map = L.map('mapp').setView([18.479, -69.897], 12);

    if (this.map) {
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(this.map);

      // Define the icon options
      const defaultIconOptions: L.IconOptions = {
        iconUrl: 'assets/icon/marker-icon.png',
        iconRetinaUrl: 'assets/icon/marker-icon-2x.png',
        shadowUrl: 'assets/icon/marker-shadow.png',
        iconSize: [25, 41],        // [width, height] in pixels
        iconAnchor: [12, 41],      // [x, y] anchor point of the icon
        popupAnchor: [1, -34],     // [x, y] popup anchor relative to the icon
        tooltipAnchor: [16, -28],  // [x, y] tooltip anchor relative to the icon
        shadowSize: [41, 41]       // [width, height] of the shadow image
      };

      // Create the default icon
      const defaultIcon = L.icon(defaultIconOptions);

      // Add markers using the default icon
      this.situaciones.forEach((situaciones: { latitud: string; longitud: string; titulo: string; voluntario: string;}) => {
        const marker = L.marker([parseFloat(situaciones.latitud), parseFloat(situaciones.longitud)], { icon: defaultIcon }).addTo(this.map);
        marker.bindPopup(`<b>${situaciones.titulo}</b><br>${situaciones.voluntario}`).openPopup();
      });

    } else {
      console.error('Map object is not initialized.');
    }
  }


}
