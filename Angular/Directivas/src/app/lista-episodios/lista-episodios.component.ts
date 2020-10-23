import { Component, OnInit } from '@angular/core';

interface IEpisodio {
  title: string,
  director: string
}

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit {

  episodios: IEpisodio[];

  constructor() {
    this.episodios = [
      { title: 'Winter Is Coming', director: 'Tim Van Patten' },
      { title: 'The Kingsroad', director: 'Tim Van Patten' },
      { title: 'Lord Snow', director: 'Brian Kirk' },
      { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
      { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { title: 'A Golden Crown', director: 'Daniel Minahan' },
      { title: 'You Win or You Die', director: 'Daniel Minahan' },
      { title: 'The Pointy End', director: 'Daniel Minahan' }
    ]
  }

  ngOnInit(): void {
  }

  onAddEpisode() {
    this.episodios.push({ title: 'Título del episodio', director: 'Mario Girón' });
  }

}
