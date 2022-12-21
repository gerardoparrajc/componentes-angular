import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public numero: number = 0;
  private urlServer: string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {
    this.numero = Math.random() * 10;
  }

  public getNumero():number {
    return this.numero;
  }

  public setNumero(num: number): void {
    this.numero = num;
  }

  public getPosts() {
    return this.http.get(this.urlServer + 'posts').pipe(
      map((resultado: any) => {
        const datos = [];
        for (const post of resultado) {
          datos.push({
            titulo: post.title,
            cuerpo: post.body
          });
        }

        return datos;
      })
    );
  }

  public getPost(id: number) {
    this.http.get(this.urlServer + 'posts/' + id).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.log(error),
      complete: () => console.log('Completado')
    });
  }

  public createPost(titulo: string, cuerpo: string, idUsuario: number) {
    const params = JSON.stringify({
      title: titulo,
      body: cuerpo,
      userId: idUsuario
    });
    this.http.post(`${this.urlServer}posts`, params).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.log(error),
      complete: () => console.log('Completado')
    });
  }

  public updatePost(id: number, titulo: string, cuerpo: string, idUsuario: number) {
    const params = JSON.stringify({
      title: titulo,
      body: cuerpo,
      userId: idUsuario
    });
    this.http.put(`${this.urlServer}posts/${id}`, params).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.log(error),
      complete: () => console.log('Completado')
    });
  }

  public deletePost(id: number) {
    this.http.delete(`${this.urlServer}posts/${id}`).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.log(error),
      complete: () => console.log('Completado')
    });
  }
}
