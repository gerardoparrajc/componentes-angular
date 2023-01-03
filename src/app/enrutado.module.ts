import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const rutas:Routes = [
  { path: 'boton/:num', component: CuerpoComponent },
  { path: '', redirectTo: '/boton/1', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class EnrutadoModule { }
