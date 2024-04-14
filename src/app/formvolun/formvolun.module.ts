import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule

import { FormvolunPageRoutingModule } from './formvolun-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormvolunPage } from './formvolun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormvolunPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [FormvolunPage]
})
export class FormvolunPageModule {}
