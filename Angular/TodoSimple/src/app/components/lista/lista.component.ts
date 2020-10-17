import { Component, Input, OnInit } from '@angular/core';
import { ITarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: ITarea[];

  constructor() { }

  ngOnInit(): void {
  }

  generarLista(): string {
    let resultado = '<ul>';
    for (let tarea of this.tareas) {
      resultado += `<li>${tarea.titulo} - ${tarea.descripcion}</li>`;
    }
    resultado += '</ul>';
    return resultado;
  }

}
