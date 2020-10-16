import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;
  identificador: string;

  constructor() {
    this.nombre = 'Pepe';
    this.identificador = 'identificadorParrafo';
    setTimeout(() => {
      this.nombre = 'Rosita';
      this.identificador = 'OtroIdentificador';
    }, 3000);
  }

  ngOnInit(): void {
  }

  generarSaludo(): string {
    return '¡Hola qué pasa!';
  }

  pulsaBoton() {
    console.log('Botón pulsado!!');
    this.nombre = 'Otro Nombre';
  }

}
