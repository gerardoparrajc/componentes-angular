import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent {

  // Propiedad definida para que reciba su valor desde el componente padre
  @Input() texto: string = '';

  // Propiedad definida para que envíe datos al componente padre
  @Output() pulsado: EventEmitter<string> = new EventEmitter();

  pulsarBoton(): void {
    // Se envía el evento con una cadena de texto.
    this.pulsado.emit(`Se ha pulsado el ${this.texto}`);
  }
}
