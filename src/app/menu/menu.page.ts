import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  hastoken: boolean = false;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.hastoken = this.apiservice.hasToken();
  }
}
