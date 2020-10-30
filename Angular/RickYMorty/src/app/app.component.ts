import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personajes: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPersonajes()
      .then(response => {
        this.personajes = response['results'];
      })
      .catch(error => {
        console.log(error);
      });
  }

}
