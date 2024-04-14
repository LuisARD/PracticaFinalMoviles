import { Component } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private database: DatabaseService) {
    this.initApp();
  }

  async initApp(){
    await this.database.initializPlugin();
  }
}
