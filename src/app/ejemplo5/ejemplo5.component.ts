import { Component } from '@angular/core';
import { ArticulosService } from '../Servicios/articulos.service';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.css'],
})
export class Ejemplo5Component {
  articulos!: Articulo[];

  constructor(private servicioArticulos: ArticulosService) {}

  ngOnInit() {
    this.articulos = this.servicioArticulos.getArticulos(); //Inicializamos esto para poder interpolar en el html
  }

  articuloSeleccionado!: Articulo | null;

  id!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;

  borrar(id: string) {
    if (this.articuloSeleccionado != null && this.articuloSeleccionado.id == id) {
      this.servicioArticulos.deleteArticulo(id);
      this.articuloSeleccionado = null;
    } else {
      this.servicioArticulos.deleteArticulo(id);
    }
  }

}