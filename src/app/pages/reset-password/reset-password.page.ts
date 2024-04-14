import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  users = this.database.getUsers();
  correo: string = '';
  clave: string = '';
  constructor(private database: DatabaseService) { }

  newPassword(){
    this.database.UpdatePassword(this.correo, this.clave);
    console.log('Se ha establecido su nueva contraseña');
    this.correo= '';
    this.clave= '';
  }

  ngOnInit() {
  }

}
