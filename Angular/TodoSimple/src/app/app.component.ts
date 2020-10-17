import { Component } from '@angular/core';
import { ITarea } from './interfaces/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: ITarea[];

  constructor() {
    this.arrTareas = [];
  }

  onTareaCreada($event) {
    this.arrTareas.push($event);
    console.log(this.arrTareas);
  }

}
