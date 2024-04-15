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

        this.apiService.getToken().subscribe(
          (token) => {
            console.log('Token obtenido:', token);
            // Redirigir a la página de noticias específicas después de obtener el token
            this.router.navigate(['/noticias-especificas']); // Ajusta la ruta según tu configuración
          }
        );

        this.cedula = '';
        this.clave = '';
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
