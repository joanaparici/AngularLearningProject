import { Component, OnInit } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-articulo',
  templateUrl: './modificar-articulo.component.html',
  styleUrls: ['./modificar-articulo.component.css'],
})
export class ModificarArticuloComponent implements OnInit{
  articuloSeleccionado!: Articulo | null;
  id!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;

  constructor(
    private servicioArticulos: ArticulosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      //Obtener el articulo del servicio
      this.articuloSeleccionado = this.servicioArticulos.getArticulo(this.id);
      if (this.articuloSeleccionado) {
        // Actualiza las propiedades del componente con los datos del artículo
        this.nombre = this.articuloSeleccionado.nombre;
        this.descripcion = this.articuloSeleccionado.descripcion;
        this.precio = this.articuloSeleccionado.precio;
      }
    });
  }
  // ngOnInit() {
  //   this.articulos = this.servicioArticulos.getArticulos(); //Inicializamos esto para poder interpolar en el html
  //     //   this.route.paramMap.subscribe(params => {
  //     // this.id = params.get('id');

  // }



  modificar() {
    if (this.articuloSeleccionado != null) {
      let articuloModificado: Articulo = {
        id: this.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
      };
      this.servicioArticulos.putArticulo(articuloModificado);
    }
    this.router.navigate(['/articulos']);
  }

  cancelar() {
    this.router.navigate(['/articulos']);
  }
}
