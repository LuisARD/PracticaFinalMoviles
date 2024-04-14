import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formvolun',
  templateUrl: './formvolun.page.html',
  styleUrls: ['./formvolun.page.scss'],
})
export class FormvolunPage implements OnInit {

  formulario: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, public router: Router) {
    this.formulario = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      clave: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  closeModal(){
    this.router.navigate(['tabs/menu']);
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const apiUrl = 'https://adamix.net/defensa_civil/def/registro.php';
      
      // Crear un FormData y agregar los campos
      const formData = new FormData();
      formData.append('cedula', this.formulario.get('cedula')?.value || '');
      formData.append('nombre', this.formulario.get('nombre')?.value || '');
      formData.append('apellido', this.formulario.get('apellido')?.value || '');
      formData.append('clave', this.formulario.get('clave')?.value || '');
      formData.append('correo', this.formulario.get('correo')?.value || '');
      formData.append('telefono', this.formulario.get('telefono')?.value || '');

      const headers = new HttpHeaders();
      this.http.post<any>(apiUrl, formData, { headers: headers }).subscribe(
        {
          next: resp => {
            console.log(resp)

            if(resp.exito){
              this.closeModal();
            }
          },
          error: err => {
            console.log(err)
          }
        }
      );
    } else {
      console.error('Formulario inválido');
      // Aquí puedes manejar el caso donde el formulario no es válido, por ejemplo mostrar un mensaje al usuario
    }
  }

}
