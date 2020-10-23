import { Component, Input, OnInit } from '@angular/core';
import { IEmpleado } from '../empleado.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() empleados: IEmpleado[];

  constructor() { }

  ngOnInit(): void {
  }

}
