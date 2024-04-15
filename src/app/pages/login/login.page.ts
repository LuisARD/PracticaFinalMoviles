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

        this.apiService.getTokenData().subscribe(
          (tokenData) => {
            console.log('Datos obtenidos:', tokenData);
            // Aquí puedes usar tokenData como objeto completo de datos según tus necesidades

            // Redirigir a la página de noticias específicas u otra página después de obtener los datos
            this.router.navigate(['/noticias-especificas']); // Ajusta la ruta según tu configuración

            // Limpia los campos de cedula y clave después del inicio de sesión
            this.cedula = '';
            this.clave = '';
          }
        );
      },
      (error) => {
        console.error('Error al llamar a la API:', error);
      }
    );
  }
  
  ngOnInit() {
    // Código de inicialización si es necesario
  }
}
