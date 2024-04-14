import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  users = this.database.getUsers();
  nombre: string = '';
  clave: string = '';
  correo: string = '';

  constructor(private database: DatabaseService) { }

  async createUser(){
    await this.database.addUser(this.nombre, this.clave, this.correo)
    this.nombre = '';
    this.clave = '';
    this.correo = '';
  }
  ngOnInit() {
  }

}
