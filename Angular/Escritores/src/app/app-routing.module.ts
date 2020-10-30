import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleEscritorComponent } from './components/detalle-escritor/detalle-escritor.component';
import { ListaLibrosComponent } from './components/detalle-escritor/lista-libros/lista-libros.component';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'escritores' },
  { path: 'escritores', component: ListaEscritoresComponent },
  {
    path: 'escritores/:escritorId', component: DetalleEscritorComponent, children: [
      { path: 'libros', component: ListaLibrosComponent }
    ]
  },
  { path: '**', redirectTo: 'escritores' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
