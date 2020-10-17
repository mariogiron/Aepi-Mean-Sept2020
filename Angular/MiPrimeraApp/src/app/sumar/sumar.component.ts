import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;
  resultado: number;

  constructor() {
    this.num1 = 4;
    this.num2 = 89;
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  calcularResultado() {
    // this.resultado = parseInt(this.num1) + parseInt(this.num2);
    this.resultado = this.num1 + this.num2;
  }

}
