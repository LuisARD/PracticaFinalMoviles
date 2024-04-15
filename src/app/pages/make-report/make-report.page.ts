import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-make-report',
  templateUrl: './make-report.page.html',
  styleUrls: ['./make-report.page.scss'],
})

export class MakeReportPage {
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}

  evento = {
    titulo: '',
    descripcion: '',
    foto: '',
    latitud: '',
    longitud: ''
  };

  @ViewChild('formulario', { static: false }) formulario!: NgForm;

  submitForm() {
    if (this.formulario.valid) {
      // Aquí puedes enviar los datos del formulario a través de HTTP o realizar alguna otra acción
      console.log(this.evento);
    }
  }
}
