import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private apiUrl = 'https://adamix.net/defensa_civil/def/iniciar_sesion.php';
    private signUpURL = 'https://adamix.net/defensa_civil/def/registro.php';
    private specificNewsUrl = 'https://adamix.net/defensa_civil/def/noticias_especificas.php';
    private reportarsitURL = 'https://adamix.net/defensa_civil/def/nueva_situacion.php';
    private misituacionesURL = 'https://adamix.net/defensa_civil/def/situaciones.php';
    private cambiarURL = 'https://adamix.net/defensa_civil/def/cambiar_clave.php';
    private tokenDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    token!: string;
    constructor(private http: HttpClient) {
    }

    login(cedula: string, clave: string): Observable<any> {
      const formData = new FormData();
      formData.append('cedula', cedula);
      formData.append('clave', clave);

      return this.http.post(this.apiUrl, formData).pipe(
        tap((response: any) => {
          console.log('Respuesta de la API:', response);
          
          if (response && response.exito && response.exito === true && response.datos) {
            const tokenData = response.datos;
            this.token = tokenData.token;
            localStorage.setItem('token', tokenData.token);
          } else {
            console.log('La respuesta de la API no incluye datos válidos.');
          }
        })
      );
    }
    CambiarClave(clave_anterior: string, clave_nueva: string){
      const formData = new FormData
      this.token = this.getToken() ?? '';
      formData.append('token', this.token);
      formData.append('clave_anterior', clave_anterior);
      formData.append('clave_nueva', clave_nueva);

      return this.http.post(this.cambiarURL, formData);
    }

    reportarSituacion(titulo: string, descripcion: string, foto: any, latitud: string, longitud: string){
      const formData = new FormData
      this.token = this.getToken() ?? '';
      formData.append('token', this.token);
      formData.append('titulo', titulo);
      formData.append('descripcion', descripcion);
      formData.append('foto', foto);
      formData.append('latitud', latitud);
      formData.append('longitud', longitud);

      return this.http.post(this.reportarsitURL, formData);
    }

    getMiSituaciones(){
      const formData = new FormData();
      this.token = this.getToken() ?? '';
    formData.append('token', this.token);

    return this.http.post(this.misituacionesURL, formData).pipe(
      tap((res: any) => {
        console.log('Respuesta de la API:', res);
        if (res && res.exito && res.exito === true && res.datos) {
          const situaciones = res.datos;
        } else {
          console.log('La respuesta de la API no incluye datos válidos.');
        }
      })
    );
    }

  getNoticiasEspecificas() {
    const formData = new FormData();
    this.token = this.getToken() ?? '';
    formData.append('token', this.token);

    return this.http.post(this.specificNewsUrl, formData).pipe(
      tap((response: any) => {
        console.log('Respuesta de la API:', response);
        
        if (response && response.exito && response.exito === true && response.datos) {
          const noticias = response.datos;
        } else {
          console.log('La respuesta de la API no incluye datos válidos.');
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.removeItem('token');
  }

  hasToken(){
    if(this.token !== '' && this.token !== undefined){
      return true;
    }else{
      return false;
    }
  }

  signup(cedula: string, nombre: string, apellido: string, clave: string, correo: string, telefono: string) {
    const formData = new FormData();
    formData.append('cedula', cedula);
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('clave', clave);
    formData.append('correo', correo);
    formData.append('telefono', telefono);

    return this.http.post(this.signUpURL, formData);
  }
}

