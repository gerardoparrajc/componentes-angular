import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BotonesModule } from './botones/botones.module';
import { RouterModule, Routes } from '@angular/router';
import { Cuerpo1Component } from './cuerpo1/cuerpo1.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { Cuerpo3Component } from './cuerpo3/cuerpo3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const rutas:Routes = [
  { path: 'boton/1', component: Cuerpo1Component },
  { path: 'boton/2', component: Cuerpo2Component },
  { path: 'boton/3', component: Cuerpo3Component },
  { path: '', redirectTo: '/boton/1', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BotonesModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
