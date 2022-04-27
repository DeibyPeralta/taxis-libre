import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackatonComponent } from './vista/hackaton/hackaton/hackaton.component';
import { IndexComponent } from './vista/index/index/index.component';
import { InscripcionesComponent } from './vista/inscripciones/inscripciones/inscripciones.component';
import { PreguntasComponent } from './vista/preguntas/preguntas/preguntas.component';
import { QuienesSomosComponent } from './vista/QuienesSomos/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {path: '', component: HackatonComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'hackaton', component: HackatonComponent},
  {path: 'inscripciones', component: InscripcionesComponent},
  {path: 'preguntas-frecuentes', component: PreguntasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
