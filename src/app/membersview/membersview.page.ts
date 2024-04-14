import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membersview',
  templateUrl: './membersview.page.html',
  styleUrls: ['./membersview.page.scss'],
})
export class MembersviewPage implements OnInit {

  miembros = [
    {
      nombre: 'Nombre del miembro 1',
      cargo: 'Cargo del miembro 1',
      telefono: '',
      correo:'',
      foto: ''
    },
    {
      nombre: 'Nombre del miembro 2',
      cargo: 'Cargo del miembro 2',
      telefono: '',
      correo:'',
      foto: ''
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
