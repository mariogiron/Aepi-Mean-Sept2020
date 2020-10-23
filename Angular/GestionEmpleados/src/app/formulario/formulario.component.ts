import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEmpleado } from '../empleado.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoEmpleado: IEmpleado;

  // 1
  @Output() enviaEmpleado: EventEmitter<IEmpleado>;

  constructor() {
    this.nuevoEmpleado = {};
    // 2
    this.enviaEmpleado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    // 3
    this.enviaEmpleado.emit(this.nuevoEmpleado);
    this.nuevoEmpleado = {};
  }

}
