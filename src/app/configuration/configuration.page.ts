import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  acercade(){
    this.router.navigate(['./tabs/acercade']);
  }
}
