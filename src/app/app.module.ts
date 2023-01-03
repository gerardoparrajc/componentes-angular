import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { BotonesModule } from './botones/botones.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BotonesComponent } from './botones/botones.component';
import { BotonComponent } from './boton/boton.component';
import { DestacadoDirective } from './directivas/destacado/destacado.directive';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { EnrutadoModule } from './enrutado.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BotonesComponent,
    BotonComponent,
    DestacadoDirective,
    CuerpoComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    // BotonesModule,
    HttpClientModule,
    EnrutadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
