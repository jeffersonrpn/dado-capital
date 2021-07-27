import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
