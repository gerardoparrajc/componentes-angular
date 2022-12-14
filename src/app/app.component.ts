import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textoBoton: string = '¡Púlsame!';
  descripcion: string = 'Deberías hacer caso a lo que te pide el siguiente botón:';

  mostrarAlerta() {
    alert('Botón pulsado');
  }
}
