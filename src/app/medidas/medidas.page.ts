import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.page.html',
  styleUrls: ['./medidas.page.scss'],
})
export class MedidasPage implements OnInit {

  medidas : any;
  mostrarDescripcionCompleta = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataMedidas();
  }

  getDataMedidas(){
    const url = 'https://adamix.net/defensa_civil/def/medidas_preventivas.php';
    this.http.get<any>(url).subscribe(
      {
        next: resp => {
          this.medidas = resp.datos;
        },
        error: err => {
          console.log(err)
        }
      }
    );
  }
}
