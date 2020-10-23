import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: PrincipalComponent },
  { path: 'info', component: InformacionComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:idCurso', component: CursosComponent },
  { path: 'escritor/:idEscritor/libro/:idLibro', component: CursosComponent },
  { path: '**', redirectTo: 'cursos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
