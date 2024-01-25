import { Injectable } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ARTICULOS } from '../Modelos/mock-articulos';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  constructor() {}

  articulos: Articulo[] = ARTICULOS; //Me creo un array con los datos del mock

  filtrarArticulos(precio: number, orden: string) {
    let articulosFiltrados=  this.articulos.filter((a) => a.precio >= precio);  //Filtro los articulos por precio

    articulosFiltrados.sort((a, b) => a.precio - b.precio);  //Ordeno los articulos por precio

    if (orden == 'asc') {  //Si el orden es ascendente, devuelvo el array tal cual
      return articulosFiltrados;
    } else {
      return articulosFiltrados.reverse();
    }
  }

  getArticulos() {
    return this.articulos;
  }

  getArticulo(id: string) {
    let pos = this.articulos.findIndex((a) => a.id == id);
    return this.articulos[pos];
  }

  addArticulo(articulo: Articulo) {
    this.articulos.push(articulo);
  }

  putArticulo(articulo: Articulo) {
    let pos = this.articulos.findIndex((a) => a.id == articulo.id);
    this.articulos[pos] = articulo;
  }

  deleteArticulo(id: string) {
    let pos = this.articulos.findIndex((a) => a.id == id);
    this.articulos.splice(pos, 1);
  }
}
