import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  fechaNacimiento: Date = new Date();
  cantidad: any = '34.2829283';
  cantidad2: any = '232.78';
  precio: number = 46.34;

  propiedadAsincrona = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resuelta la promesa');
    }, 1000);
  });

  objeto = [
    {
      nombre: 'Felipe',
      edad: 43
    },
    {
      nombre: 'Manoli',
      edad: 42
    },
    {
      nombre: 'Tiburcio',
      edad: 76
    },
    {
      nombre: 'Ambrosia',
      edad: 12
    },
    {
      nombre: 'Torcuato',
      edad: 86
    },
  ];

  constructor(private auth: AuthenticationService) { }

  login() {
    this.auth.login();
  }

}
