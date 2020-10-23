import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';
import { SubrayadoDirective } from './subrayado.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    ListaEpisodiosComponent,
    SubrayadoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
