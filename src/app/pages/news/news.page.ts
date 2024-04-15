import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {

  noticias : any;

  constructor(private http: HttpClient) {
    this.getDataNoticias();
   }

   getDataNoticias(){
    const url = 'https://adamix.net/defensa_civil/def/noticias.php';
    this.http.get<any>(url).subscribe(
      {
        next: resp => {
          this.noticias = resp.datos;
        },
        error: err => {
          console.log(err)
        }
      }
    );
  }


}
