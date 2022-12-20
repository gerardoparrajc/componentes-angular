import { Component } from '@angular/core';
import { MiServicioService } from './services/mi-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private servicio: MiServicioService) {
    console.log(servicio.getNumero());
  }
}
