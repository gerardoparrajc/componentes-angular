import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit{

  // Propiedad definida para que reciba su valor desde el componente padre
  @Input() texto: string = '';
  @Input() numero: number = 0;

  // Propiedad definida para que envíe datos al componente padre
  @Output() pulsado: EventEmitter<string> = new EventEmitter();

  esMayor: boolean = false;

  ngOnInit() {
    this.getNumber();
  }

  pulsarBoton(): void {
    // Se envía el evento con una cadena de texto.
    this.pulsado.emit(`Se ha pulsado el ${this.texto}`);
  }

  getNumber(): number {
    const resultado = Math.random() * 10;
    this.esMayor = resultado > 5;
    return resultado;
  }


}
