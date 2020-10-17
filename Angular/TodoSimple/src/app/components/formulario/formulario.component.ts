import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITarea } from '../../interfaces/tarea.interface';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevaTarea: ITarea;

  @Output() tareaCreada: EventEmitter<ITarea>;

  constructor() {
    this.nuevaTarea = {};
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.nuevaTarea);
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = {};
  }

}
