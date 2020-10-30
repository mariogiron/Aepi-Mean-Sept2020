import { Component, OnInit } from '@angular/core';
import { Escritor, EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  ngOnInit(): void {
    this.escritoresService.getAll()
      .then(escritores => {
        this.arrEscritores = escritores;
      })
      .catch(error => console.log(error));
  }

  async onChange($event) {
    const valor = $event.target.value;
    if (valor === 'todos') {
      this.arrEscritores = await this.escritoresService.getAll();
    } else {
      this.arrEscritores = await this.escritoresService.getByPais(valor);
    }
  }

}
