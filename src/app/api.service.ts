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
  private token: string = ''
  private tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

    login(cedula: string, clave: string): Observable<any> {
      const formData = new FormData();
      formData.append('cedula', cedula);
      formData.append('clave', clave);

      return this.http.post(this.apiUrl, formData).pipe(
        tap((response: any) => {
          console.log('Respuesta de la API:', response);
          
          if (response && response.exito && response.exito === true && response.datos && response.datos.token) {
            const token = response.datos.token;
            console.log('Token recibido de la API:', token);
            this.tokenSubject.next(token);
          } else {
            console.log('La respuesta de la API no incluye un token válido.');
          }
        })
      );
    }

    getToken(): Observable<string> {
      return this.tokenSubject.asObservable();
    }
  
    // Método para obtener noticias específicas usando el token
    getSpecificNews(): Observable<any> {
      return this.getToken().pipe(
        switchMap((token) => {
          // Verificar si hay un token disponible
          if (token) {
            // Crear cabecera con el token
            const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
            // Realizar la solicitud HTTP con la cabecera
            return this.http.get(this.specificNewsUrl, { headers });
          } else {
            // Manejar el caso donde no hay token disponible
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

