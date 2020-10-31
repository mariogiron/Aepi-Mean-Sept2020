import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/productos/lista/lista.component';
import { NuevoComponent } from './components/productos/nuevo/nuevo.component';
import { RegistroComponent } from './components/usuarios/registro/registro.component';
import { LoginComponent } from './components/usuarios/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NuevoComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
