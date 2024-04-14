import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  clave: string = '';
  constructor(private database: DatabaseService, private router: Router) { }

  async loguearte(){
    const loggedIn = await this.database.LoginUser(this.usuario, this.clave);
    if (loggedIn) {
      console.log('Inicio de sesión exitoso');
     this.router.navigate(['/post-login'])
    } else {
      console.log('Al parecer las credenciales son incorrecta, prueba otra vez o create una cuenta nueva');
    }
  }

  ngOnInit() {
  }

}
