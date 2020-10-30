import { Injectable } from '@angular/core';
import { LIBROS } from '../db/libros.db';

export interface Libro {
  id: number;
  titulo: string;
  publicado: number;
  imagen: string;
  escritor: number;
}

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritor(pEscritorId: string): Promise<Libro[]> {
    return new Promise((resolve, reject) => {
      resolve(LIBROS.filter(libro => libro.escritor === parseInt(pEscritorId)));
    });
  }

}
