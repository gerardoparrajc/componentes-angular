import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      datosUsuario: new FormGroup({
        username: new FormControl('',  [Validators.required, this.nombresProhibidos.bind(this)]),
        email: new FormControl('', [Validators.required, Validators.email], this.emailsProhibidos),
        edad: new FormControl(0, [Validators.min(18), Validators.max(65), Validators.required])
      }),
      city: new FormControl('almeria', Validators.required),
      aceptacion: new FormControl(false, Validators.requiredTrue)
    }, this.validadorFormulario);
  }

  ngOnInit() {

    /* this.formulario.setValue({
      datosUsuario: {
        username: 'test',
        email: 'test@test.com'
      },
      city: 'madrid'
    }); */

    this.formulario.patchValue({
      city: 'almeria'
    });
  }

  onSubmit() {
    console.log(this.formulario);
  }

  nombresProhibidos(control: FormControl): { [s: string]: boolean } | null {
    const palabrasProhibidas = ['antonio', 'federico', 'maria'];
    if (palabrasProhibidas.indexOf(String(control.value).toLowerCase()) !== -1) {
      return { 'nombreProhibido': true };
    }

    return null;
  }

  emailsProhibidos(control: AbstractControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (!<string>(control.value).includes('@gmail.com')) {
          resolve({ 'emailProhibido': true });
        } else {
          resolve(null);
        }
      }, 1000);
    });

    return promise;
  }

  validadorFormulario(form: AbstractControl): { [s: string]: boolean } | null {

    if (form.get('datosUsuario.username')!.value === form.get('datosUsuario.email')!.value) {
      return { iguales: true };
    }

    return null;
  }

}
