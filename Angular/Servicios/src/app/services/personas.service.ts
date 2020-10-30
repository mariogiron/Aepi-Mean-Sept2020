import { Injectable } from '@angular/core';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  trabajo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private arrPersonas: Persona[];

  constructor() {
    this.arrPersonas = [
      { nombre: 'Mario', apellidos: 'Girón', edad: 34, trabajo: true },
      { nombre: 'Lucía', apellidos: 'García', edad: 21, trabajo: true },
      { nombre: 'Ramón', apellidos: 'López', edad: 78, trabajo: false },
      { nombre: 'Lorena', apellidos: 'Martín', edad: 12, trabajo: true },
      { nombre: 'Javier', apellidos: 'Gutiérrez', edad: 44, trabajo: false }
    ];
  }

  getAll(): Persona[] {
    return this.arrPersonas;
  }

  getAllPromise(): Promise<Persona[]> {
    return new Promise<Persona[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.arrPersonas);
      }, 3000);
    });
  }

  mayoresEdad(): Promise<Persona[]> {
    return new Promise<Persona[]>((resolve, reject) => {
      let arrFiltrado: Persona[] = [];
      for (let persona of this.arrPersonas) {
        if (persona.edad >= 18) {
          arrFiltrado.push(persona);
        }
      }
      resolve(arrFiltrado);
    });
  }

  mayoresEdadV2(pEdad: number = 18): Promise<Persona[]> {
    return new Promise<Persona[]>((resolve, reject) => {
      resolve(this.arrPersonas.filter(pers => pers.edad >= pEdad));
    });
  }

  estaTrabajando(): Promise<Persona[]> {
    return Promise.resolve(this.arrPersonas.filter(pers => pers.trabajo));
  }

  create(pPersona: Persona): Promise<string> {
    return new Promise((resolve, reject) => {
      this.arrPersonas.push(pPersona);
      resolve('Se ha agregado el objeto');
    });
  }

}
