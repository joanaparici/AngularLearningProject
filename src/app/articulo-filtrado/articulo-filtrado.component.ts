import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo-filtrado',
  templateUrl: './articulo-filtrado.component.html',
  styleUrls: ['./articulo-filtrado.component.css'],
})
export class ArticuloFiltradoComponent {
  articulos!: Articulo[];

  constructor(
    private ruta: ActivatedRoute,
    private servicioArticulos: ArticulosService
  ) {}

  ngOnInit() {
    let precio: number; //Si hubiese puestro string, el en suscribe deberia ser params['precio'] y no params.precio
    let orden: string;
    this.ruta.queryParams.subscribe((params) => {
      precio = params['precio'];
      orden = params['orden'];
      this.articulos = this.servicioArticulos.filtrarArticulos(precio, orden);
    });
    // this.articulos = this.servicioArticulos.getArticulos(); //Inicializamos esto para poder interpolar en el html
  }
}
