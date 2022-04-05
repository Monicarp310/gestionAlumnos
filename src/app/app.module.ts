import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AltaAlumnoComponent } from './altaAlumno/alta-alumno/alta-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
