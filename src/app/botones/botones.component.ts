import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent {

  botones = [
    {texto: 'Botón 1',cantidad: 4 },
    {texto: 'Boton 2',cantidad: 7 },
    {texto: 'Boton 3', cantidad: 2 }
  ];

  // Función que maneja el evento (pulsado). Como parámetro recibe los datos enviados por el
  // componente hijo.
  mostrarDatosRecibidos(datos: string) {
    alert(datos);
  }
}
