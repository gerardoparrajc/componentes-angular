import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  formularioRegistro: FormGroup;

  constructor() {
    this.formularioRegistro = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repitePassword: new FormControl('', [Validators.required])
    }, this.validarPasswords);
  }

  onSubmit() {
    console.log(this.formularioRegistro);
  }

  validarPasswords(formulario: AbstractControl): { [s: string]: boolean } | null {
    const password = formulario.get('password');
    const repitePassword = formulario.get('repitePassword');

    if (password?.value !== repitePassword?.value) {
      return { passwordsIguales: true };
    }

    return null;
  }
}
