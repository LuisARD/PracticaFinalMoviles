import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Component({
  selector: 'app-albergues-map',
  templateUrl: './albergues-map.page.html',
  styleUrls: ['./albergues-map.page.scss'],
})
export class AlberguesMapPage implements OnInit {
  albergues : any;
  albergueSeleccionado: any;
  filteredItems: any = [];

  medidas : any;
  miembros : any;

  map!: L.Map;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataAlbergues();
  }

  getDataAlbergues(){
    const url = 'https://adamix.net/defensa_civil/def/albergues.php';
    this.http.get<any>(url).subscribe(
      {
        next: resp => {
          this.albergues = resp.datos;
          this.filteredItems = [...this.albergues];

          console.log(this.albergues);
          this.loadMap();

        },
        error: err => {
          console.log(err)
        }
      }
    );
  }

  loadMap() {
    // Initialize the map and store it in this.map
    this.map = L.map('mapp').setView([18.479, -69.897], 12);

    // Check if map was initialized
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
      this.albergues.forEach((albergue: { lat: string; lng: string; ciudad: any; edificio: any; }) => {
        const marker = L.marker([parseFloat(albergue.lng), parseFloat(albergue.lat)], { icon: defaultIcon }).addTo(this.map);
        marker.bindPopup(`<b>${albergue.ciudad}</b><br>${albergue.edificio}`).openPopup();
      });

    } else {
      console.error('Map object is not initialized.');
    }
  }


}
