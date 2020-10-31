import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personajes: any[];
  paginaActual: number;
  numPaginas: number;

  constructor(private apiService: ApiService) {
    this.paginaActual = 1;
  }

  ngOnInit() {
    this.apiService.getPersonajes()
      .then(response => {
        this.personajes = response['results'];
        this.numPaginas = response['info']['pages'];
      })
      .catch(error => {
        console.log(error);
      });
  }

  async onClick(siguiente: boolean) {
    if (siguiente) {
      this.paginaActual++;
    } else {
      this.paginaActual--;
    }
    try {
      const response = await this.apiService.getPersonajes(this.paginaActual);
      this.personajes = response['results'];
    } catch (error) {
      console.log(error);
    }
  }

}
