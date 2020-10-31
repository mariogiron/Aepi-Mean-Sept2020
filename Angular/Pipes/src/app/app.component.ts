import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  precio: number;
  numero: number;
  fechaActual: Date;
  texto: string;
  numeros: number[];

  constructor() {
    this.precio = 3200.45;
    this.numero = 45542.12122343;
    setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
    this.texto = 'hola mundo';
    this.numeros = [23, 5, 78, 9, 34];
  }

}
