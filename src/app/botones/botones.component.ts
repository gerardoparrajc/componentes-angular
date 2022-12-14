import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent {

  // Función que maneja el evento (pulsado). Como parámetro recibe los datos enviados por el
  // componente hijo.
  mostrarDatosRecibidos(datos: string) {
    alert(datos);
  }
}
