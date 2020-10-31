import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  formNuevo: FormGroup;

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {
    this.formNuevo = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
      departamento: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productosService.create(this.formNuevo.value)
      .then(response => {
        if (response['success']) {
          this.router.navigate(['/productos']);
        }
      })
      .catch(error => console.log(error));
  }

}
