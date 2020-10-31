import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Usuario {
  nombre: string;
  apellidos: string;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
  }

  registrar(formValue: Usuario) {
    return this.http.post(`${this.baseUrl}/registro`, formValue).toPromise();
  }

  login(formValue: { email: string, password: string }) {
    return this.http.post(`${this.baseUrl}/login`, formValue).toPromise();
  }

}
