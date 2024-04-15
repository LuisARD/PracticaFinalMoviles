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
  error: string = '';
  hastoken: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  login() {
    this.apiService.login(this.cedula, this.clave).subscribe(
      (response) => {

        if(response.exito){
          // Redirigir a la página de noticias específicas u otra página después de obtener los datos
          this.router.navigate(['../tabs/menu'], { replaceUrl: true });

          // Limpia los campos de cedula y clave después del inicio de sesión
          this.cedula = '';
          this.clave = '';
        }else{
          this.error = response.mensaje;
        }
          
      },
      (error) => {
        console.error('Error al llamar a la API:', error);
      }
    );
  }
  
  ngOnInit() {
    if(this.apiService.hasToken()){
      this.hastoken = true;
    }
  }
}
