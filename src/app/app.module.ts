import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './vista/index/index/index.component';
import { QuienesSomosComponent } from './vista/QuienesSomos/quienes-somos/quienes-somos.component';
import { HackatonComponent } from './vista/hackaton/hackaton/hackaton.component';
import { InscripcionesComponent } from './vista/inscripciones/inscripciones/inscripciones.component';
import { PreguntasComponent } from './vista/preguntas/preguntas/preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    QuienesSomosComponent,
    HackatonComponent,
    InscripcionesComponent,
    PreguntasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
