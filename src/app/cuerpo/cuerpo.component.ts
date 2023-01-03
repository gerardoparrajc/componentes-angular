import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MiServicioService } from '../services/mi-servicio.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {

  datos: any;


  constructor(private route: ActivatedRoute, private servicio: MiServicioService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['num'];
    this.datos = this.servicio.getDato(id);

    const parametroGet = this.route.snapshot.queryParams['editar'];
    const fragment = this.route.snapshot.fragment;

    console.log(parametroGet);
    console.log(fragment);

    this.route.params.subscribe({
      next: (params: Params) => {
        const id = +params['num'];
        this.datos = this.servicio.getDato(id);
      }
    });
  }
}
