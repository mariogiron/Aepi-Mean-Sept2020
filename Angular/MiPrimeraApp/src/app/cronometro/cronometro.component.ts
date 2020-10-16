import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crono',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  contador: number;

  constructor() {
    this.contador = 10;
  }

  ngOnInit(): void {
  }

  arrancaContador() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  entraRaton() {
    console.log('Entra el ratón en el párrafo');
  }

}
