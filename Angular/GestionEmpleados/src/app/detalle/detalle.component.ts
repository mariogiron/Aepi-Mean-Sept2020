import { Component, Input, OnInit } from '@angular/core';
import { IEmpleado } from '../empleado.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() empleado: IEmpleado;

  constructor() { }

  ngOnInit(): void {
  }

}
