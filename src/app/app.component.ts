import { Component } from '@angular/core';
import { MiServicioService } from './services/mi-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: any[] = [];

  constructor(private servicio: MiServicioService) {
    servicio.getPosts().subscribe({
      next: (resultado) => {
        this.posts = resultado;
      }
    })
    /* console.log(servicio.getPost(548));
    console.log(servicio.createPost('hola mundo', 'cuerpo del hola mundo', 4));
    console.log(servicio.updatePost(3, 'hola mundo', 'cuerpo del hola mundo', 4));
    console.log(servicio.deletePost(83)); */
  }
}
