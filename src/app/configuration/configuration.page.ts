import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
  hastoken: boolean = false;

  constructor(private router: Router, private apiservice: ApiService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.hastoken = this.apiservice.hasToken();
  }

  acercade(){
    this.router.navigate(['./tabs/acercade']);
  }

  login(){
    this.router.navigate(['./login']);
  }

  cambiar(){
    this.router.navigate(['./cambiar-clave'])
  }
}
