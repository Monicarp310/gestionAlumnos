import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router
import { AltaAlumnoComponent } from './altaAlumno/alta-alumno/alta-alumno.component';

const routes: Routes = [
  { path: '', component: AltaAlumnoComponent },
  { path: 'alta', component: AltaAlumnoComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
