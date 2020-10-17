import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'crono',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() contador: number;

  @Output() terminaCrono: EventEmitter<string>;

  constructor() {
    this.contador = 10;
    this.terminaCrono = new EventEmitter();
  }

  ngOnInit(): void {

  }

  arrancaContador() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);
        this.terminaCrono.emit('El contador ha terminado');
      }
    }, 1000);
  }

  entraRaton($event) {
    console.log($event.target);
    $event.target.style.color = 'green';
    console.log('Entra el ratón en el párrafo');
  }

}