import { Component } from '@angular/core';
import { MiServicioService } from '../services/mi-servicio.service';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent {

  constructor(private servicio: MiServicioService) {
    console.log(this.servicio.getNumero());
    this.servicio.setNumero(3);
    console.log(this.servicio.getNumero());
  }

  // Función que maneja el evento (pulsado). Como parámetro recibe los datos enviados por el
  // componente hijo.
  mostrarDatosRecibidos(datos: string) {
    alert(datos);
  }
}
