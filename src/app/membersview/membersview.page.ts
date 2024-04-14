import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-membersview',
  templateUrl: './membersview.page.html',
  styleUrls: ['./membersview.page.scss'],
})
export class MembersviewPage implements OnInit {

  miembros : any;


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getDataMiembros();
  }

  getDataMiembros(){
    const url = 'https://adamix.net/defensa_civil/def/miembros.php';
    this.http.get<any>(url).subscribe(
      {
        next: resp => {
          this.miembros = resp.datos;
        },
        error: err => {
          console.log(err)
        }
      }
    );
  }

}
