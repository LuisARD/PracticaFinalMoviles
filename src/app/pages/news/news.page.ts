import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {

  noticias = [
    {
      titulo: 'Título de la noticia 1',
      descripcion: 'Descripción de la noticia 1',
      imagenUrl: 'assets/DC-logo-2017.png'
    },
    {
      titulo: 'Título de la noticia 2',
      descripcion: 'Descripción de la noticia 2',
      imagenUrl: 'assets/DC-logo-2017.png'
    },
    {
      titulo: 'Título de la noticia 3',
      descripcion: 'Descripción de la noticia 3',
      imagenUrl: 'assets/DC-logo-2017.png'
    },
    {
      titulo: 'Título de la noticia 4',
      descripcion: 'Descripción de la noticia 4',
      imagenUrl: 'assets/DC-logo-2017.png'
    },
    {
      titulo: 'Título de la noticia 5',
      descripcion: 'Descripción de la noticia 5',
      imagenUrl: 'assets/DC-logo-2017.png'
    },

    // Agrega más noticias según sea necesario
  ];

  constructor() {}


}
