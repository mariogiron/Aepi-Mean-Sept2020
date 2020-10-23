import { Component } from '@angular/core';
import { IEmpleado } from './empleado.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmpleados: IEmpleado[];

  constructor() {
    this.arrEmpleados = [];
  }

  onEnviaEmpleado($event) {
    this.arrEmpleados.push($event);
    console.log(this.arrEmpleados);
  }

  recuperarFiltrados(dept) {
    return this.arrEmpleados.filter(empleado => empleado.departamento === dept);
  }

}
