import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public numero: number = 0;

  constructor() {
    this.numero = Math.random() * 10;
  }

  public getNumero():number {
    return this.numero;
  }

  public setNumero(num: number): void {
    this.numero = num;
  }
}
