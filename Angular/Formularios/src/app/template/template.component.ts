import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('botonSegundo') btnSeg: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  recuperarBotones() {
    const botonPrimero = document.getElementById('botonPrimero');
    console.log(botonPrimero);
    botonPrimero.style.backgroundColor = 'red';

    const botonPrimeroV2 = document.querySelector('#botonPrimero');
    console.log(botonPrimeroV2);

    console.log(this.btnSeg);
    this.btnSeg.nativeElement.style.backgroundColor = 'green';
  }

}
