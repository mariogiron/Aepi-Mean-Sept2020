import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';

export interface Escritor {
  id: number;
  nombre: string;
  apellidos: string;
  imagen: string;
  pais: string;
}

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Promise<Escritor[]> {
    return new Promise<Escritor[]>((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais: string): Promise<Escritor[]> {
    return Promise.resolve(ESCRITORES.filter(escritor => escritor.pais === pPais));
  }

  getById(pId: string): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES.find(escritor => {
        return escritor.id === parseInt(pId);
      }));
    })
  }

}
