import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvolun',
  templateUrl: './formvolun.page.html',
  styleUrls: ['./formvolun.page.scss'],
})
export class FormvolunPage implements OnInit {

 nombre!: string;

 correo!: string;

 telefono!: string;

 cedula!:string;

 experiencia!: string;

 mensajeopcio!: string;


  constructor() { }

  ngOnInit() {
  }

  enviarFormulario(){

    console.log('Nombre:', this.nombre);
    console.log('Correo electronico:', this.correo);
    console.log('Número de teléfono:', this.telefono);
    console.log('Cédula:', this.cedula);
    console.log('Experiencia:', this.experiencia);
    console.log('Mensaje Opcional:', this.mensajeopcio);
  }

}
