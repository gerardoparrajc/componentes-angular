import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonesModule } from './botones/botones.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BotonesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
