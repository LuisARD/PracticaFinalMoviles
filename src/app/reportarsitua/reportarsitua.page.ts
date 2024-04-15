import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-reportarsitua',
  templateUrl: './reportarsitua.page.html',
  styleUrls: ['./reportarsitua.page.scss'],
})
export class ReportarsituaPage implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  foto: any;
  latitud: string = '';
  longitud: string = '';

  constructor(private apiService: ApiService) { }
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.foto = reader.result; // Guardar la imagen en formato base64
      };
      reader.readAsDataURL(file);
    }
  }

  reportarSituacion() {
      this.apiService.reportarSituacion(this.titulo, this.descripcion, this.foto, this.latitud, this.longitud)
        .subscribe(
          (response) => {
            console.log('Respuesta de la API al reportar situación:', response);
            this.titulo = '';
            this.descripcion = '';
            this.latitud= '';
            this.longitud ='';
          },
          (error) => {
            console.error('Error al reportar situación:', error);
          }
        );
    
  }

  ngOnInit() {
  }

}
