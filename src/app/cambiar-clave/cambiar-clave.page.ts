import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage implements OnInit {
  clave_nueva: string = '';
  clave_anterior: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  Cambiar(){
    this.apiService.CambiarClave(this.clave_anterior, this.clave_nueva).subscribe(
      (response) => {
        console.log('Respuesta de la API: ', response)
        this.clave_anterior = '';
        this.clave_nueva = '';
        
    },
    (error) => {
      console.error('Error al llamar a la API:', error);
    }
  );
  }
}
