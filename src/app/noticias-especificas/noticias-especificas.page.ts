import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-noticias-especificas',
  templateUrl: './noticias-especificas.page.html',
  styleUrls: ['./noticias-especificas.page.scss'],
})
export class NoticiasEspecificasPage implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
        }
}
