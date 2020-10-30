import { Component } from '@angular/core';
import { Persona, PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personas: Persona[];

  constructor(private personasService: PersonasService) { }

  async ngOnInit() {
    // const persona = this.personasService.getAll();
    // console.log(persona);

    // Con Promesa
    // console.log('Inicio');
    // this.personasService.getAllPromise()
    //   .then((arr) => {
    //     console.log('Medio');
    //     this.personas = arr;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log('Final');

    // Con Promesa async-await
    try {
      this.personas = await this.personasService.getAllPromise();
    } catch (error) {
      console.log(error);
    }
  }

  onClickMayores() {
    this.personasService.mayoresEdadV2()
      .then(arr => {
        this.personas = arr;
      })
      .catch(error => {
        console.log(error);
      });
  }

  async onClickTrabajo() {
    this.personas = await this.personasService.estaTrabajando();
  }

  onClickAgregar() {
    this.personasService.create({ nombre: 'Gustavo', apellidos: 'López', edad: 34, trabajo: true })
      .then(mensaje => console.log(mensaje))
      .catch(error => console.log(error));
  }

}