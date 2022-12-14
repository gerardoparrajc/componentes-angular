import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent {

  // Propiedad definida para que reciba su valor desde el componente padre
  @Input() texto: string = '';
}
