import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-history',
  templateUrl: './event-history.page.html',
  styleUrls: ['./event-history.page.scss'],
})
export class EventHistoryPage{

  reportes: any[] = []; // Supongamos que tienes un arreglo de reportes

  constructor() {
    // Simulamos la carga de reportes desde algún servicio o fuente de datos
    this.loadReportes();
  }

  loadReportes() {
    // Aquí cargarías los reportes desde tu fuente de datos, como un servicio o una API
    // Por ejemplo, podrías hacer una llamada HTTP para obtener los reportes
    // Y luego asignar los datos al arreglo reportes
    this.reportes = [
      {
        codigo: '001',
        fecha: new Date(),
        titulo: 'Evento de prueba',
        descripcion: 'Este es un evento de prueba.',
        foto: 'URL_DE_LA_IMAGEN',
        estado: 'En proceso',
        comentarios: 'Sin comentarios'
      },
      // Aquí agregarías más objetos de reporte según sea necesario
    ];
  }

}
