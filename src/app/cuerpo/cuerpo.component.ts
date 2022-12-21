import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe({
      next: (ruta) => console.log(ruta),
      error: (erro) => console.log(erro)
    });
  }
}
