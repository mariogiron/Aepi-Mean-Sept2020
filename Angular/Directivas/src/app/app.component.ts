import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estilosParrafo: Object;
  activaClase: boolean;

  constructor() {
    this.activaClase = true;
    this.estilosParrafo = {
      color: 'indigo',
      backgroundColor: 'tomato'
    }
  }

  ngOnInit() {
    setInterval(() => this.activaClase = !this.activaClase, 2000);
  }

  cambiaColor(pColor) {
    this.estilosParrafo['color'] = pColor;
  }

  onInput($event) {
    this.estilosParrafo['background-color'] = $event.target.value;
  }

  onInputRange($event) {
    this.estilosParrafo['font-size'] = `${$event.target.value}px`;
  }

}
