import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(formValue) {
    try {
      const response = await this.usuariosService.login(formValue)
      if (response['success']) {
        localStorage.setItem('tienda_token', response['token']);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
