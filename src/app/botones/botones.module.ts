import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonesComponent } from './botones.component';
import { BotonComponent } from '../boton/boton.component';



@NgModule({
  declarations: [
    BotonesComponent,
    BotonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotonesComponent,
    BotonComponent
  ]
})
export class BotonesModule { }
