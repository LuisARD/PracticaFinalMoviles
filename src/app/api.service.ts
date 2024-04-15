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
  //private specificNewsUrl = 'https://adamix.net/defensa_civil/def/noticias_especificas.php';
  private tokenDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }
  login(cedula: string, clave: string): Observable<any> {
    const formData = new FormData();
    formData.append('cedula', cedula);
    formData.append('clave', clave);

    return this.http.post(this.apiUrl, formData).pipe(
      tap((response: any) => {
        console.log('Respuesta de la API:', response);
        
        if (response && response.exito && response.exito === true && response.datos) {
          const tokenData = response.datos;
          console.log('Datos recibidos de la API:', tokenData);
          this.tokenDataSubject.next(tokenData);
        } else {
          console.log('La respuesta de la API no incluye datos válidos.');
        }
      })
    );
  }

  getTokenData(): Observable<any> {
    return this.tokenDataSubject.asObservable();
  }

  getNoticiasEspecificas(): Observable<any> {
    return this.getTokenData().pipe(
      tap((tokenData) => {
        if (tokenData && tokenData.token) {
          const token = tokenData.token; // Obtener solo el valor de token
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

          // Crear formData para enviar datos adicionales si es necesario
          const formData = new FormData();
          formData.append('parametro1', 'valor1');
          formData.append('parametro2', 'valor2');

          return this.http.post('https://adamix.net/defensa_civil/def/noticias_especificas.php', formData, { headers });
        } else {
          throw new Error('Token no disponible');
        }
      })
    );
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
