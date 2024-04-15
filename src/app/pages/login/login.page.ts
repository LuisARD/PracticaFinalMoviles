import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cedula: string = '';
  clave: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  Clickear() {
    this.apiService.login(this.cedula, this.clave).subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);

        if (response && response.exito && response.exito === true && response.datos) {
          console.log('Inicio de sesión exitoso.');

          this.apiService.getTokenData().subscribe(
            (tokenData) => {
              console.log('Datos obtenidos:', tokenData);
              this.router.navigate(['/tabs']);
              this.cedula = '';
              this.clave = '';
            }
          );
        } else {
          console.log('Inicio de sesión fallido: Datos incorrectos o no válidos.');
        }
      },
      (error) => {
        console.error('Error al llamar a la API:', error);
      }
    );
  }
  
  ngOnInit() {}
}
