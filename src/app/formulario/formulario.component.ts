import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  @ViewChild('formulario') formulario?: NgForm;
  defaultCity = 'almeria';
  defaultUsername = 'test';
  username = '';
  usuario = {
    nombreUsuario: '',
    correoElectronico: '',
    ciudad: ''
  };


  onSubmit() {
    this.usuario.nombreUsuario = this.formulario?.value.datosUsuario.username;
    this.usuario.correoElectronico = this.formulario?.value.datosUsuario.email;
    this.usuario.ciudad = this.formulario?.value.city;

    this.formulario?.reset();

    console.log(this.usuario);
  }

  rellenarUsuario() {
    /* this.formulario?.setValue({
      datosUsuario: {
        username: 'test',
        email: 'test@test.com'
      },
      city: 'madrid'
    }); */

    this.formulario?.form.patchValue({
      datosUsuario: {
        username: 'test'
      }
    });
  }

}
