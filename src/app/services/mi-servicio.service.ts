import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public numero: number = 0;
  private urlServer: string = 'https://jsonplaceholder.typicode.com3/';

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
    this.http.get(this.urlServer + 'posts').subscribe({
      next: (result) => console.log(result),
      error: (error) => console.log(error),
      complete: () => console.log('Completado')
    });
  }
}
