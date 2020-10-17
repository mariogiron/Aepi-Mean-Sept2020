import { Component, OnInit } from '@angular/core';

interface IUser {
  nombre?: string;
  nick?: string;
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  campoNombre: string;
  usuario: IUser;

  constructor() {
    this.campoNombre = 'valor inicial';
    this.usuario = {};
  }

  ngOnInit(): void {
  }

  onClick() {
    this.campoNombre = 'Hugo';
  }

}