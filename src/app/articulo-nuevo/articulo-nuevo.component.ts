import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo-nuevo',
  templateUrl: './articulo-nuevo.component.html',
  styleUrls: ['./articulo-nuevo.component.css'],
})
export class ArticuloNuevoComponent {
  articulos!: Articulo[];

  constructor(
    private servicioArticulos: ArticulosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.articulos = this.servicioArticulos.getArticulos(); //Inicializamos esto para poder interpolar en el html
  }

  id!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;

  anyadir() {
    let articuloNuevo: Articulo = {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
    };
    this.servicioArticulos.addArticulo(articuloNuevo);
    this.articulos = this.servicioArticulos.getArticulos();

    this.router.navigate(['/articulos']);
  }

  cancelar() {
    this.router.navigate(['/articulos']);
  }
}
