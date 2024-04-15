import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albergues',
  templateUrl: './albergues.page.html',
  styleUrls: ['./albergues.page.scss'],
})
export class AlberguesPage implements OnInit {
  albergues : any;
  albergueSeleccionado: any;
  filteredItems: any = [];

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
        },
        error: err => {
          console.log(err)
        }
      }
    );
  }

  searchItems(ev: any) {
    const searchTerm = ev.target.value;
    if (searchTerm && searchTerm.trim() !== '') {
      this.filteredItems = this.albergues.filter((item: { ciudad: string; codigo: string; edificio: string; coordinador: string; telefono: string; capacidad: string; }) => {
        return (
          item.ciudad.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.edificio.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.coordinador.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.telefono.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.capacidad.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    } else {
      this.filteredItems = [...this.albergues]; // Mostrar todos los items si no hay término de búsqueda
    }
  }
}
