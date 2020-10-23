import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  color: string;
  mostrar: boolean;

  constructor() {
    this.color = 'rojo';
    this.mostrar = true;
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.color === 'rojo') {
        this.color = 'amarillo';
      } else if (this.color === 'amarillo') {
        this.color = 'verde';
      } else {
        this.color = 'rojo';
      }
    }, 1500);
  }

  onClick() {
    this.mostrar = !this.mostrar;
  }

}
