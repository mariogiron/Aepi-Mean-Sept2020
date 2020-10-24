import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelComponent } from './model/model.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'model' },
  { path: 'model', component: ModelComponent },
  { path: 'template', component: TemplateComponent },
  { path: '**', redirectTo: 'model' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
