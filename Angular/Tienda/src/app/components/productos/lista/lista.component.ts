import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  productos: Producto[];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.productosService.getAll()
      .then(response => {
        this.productos = response;
      })
      .catch(error => {
        console.log(error);
      });
  }

  onClickEliminar(pProducto: Producto) {
    this.productosService.delete(pProducto._id)
      .then(async response => {
        if (response['success']) {
          this.productos = await this.productosService.getAll();
        }
      })
      .catch(error => console.log(error));
  }

}
