import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CursosComponent } from './cursos/cursos.component';
import { PrincipalComponent } from './principal/principal.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RelatedComponent } from './related/related.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    CursosComponent,
    PrincipalComponent,
    ReviewsComponent,
    RelatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
