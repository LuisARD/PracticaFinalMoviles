import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  cedula: string = '';
  nombre: string = '';
  apellido: string = '';
  clave: string = '';
  correo: string = '';
  telefono: string = '';

  constructor(private apiService: ApiService) { }
  Clickear(){
    this.apiService.signup(this.cedula, this.nombre, this.apellido, this.clave, this.correo, this.telefono).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);
        this.cedula = '';
        this.nombre = '';
        this.apellido = '';
        this.clave = '';
        this.correo = '';
        this.telefono = '';
      },
      (error) => {
        console.error('Error al llamar a la API:', error);
      }
    );
  }

  ngOnInit() {}

}
