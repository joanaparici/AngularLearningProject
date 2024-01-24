import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';

@Component({
  selector: 'app-borra-articulo',
  templateUrl: './borra-articulo.component.html',
  styleUrls: ['./borra-articulo.component.css'],
})
export class BorraArticuloComponent {

  articulo!: Articulo;
  constructor(
    private servicioArticulos: ArticulosService,
    private rutaActiva: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.rutaActiva.snapshot.params['id']; //Obtengo el id de la ruta
    this.articulo = this.servicioArticulos.getArticulo(id); //Obtengo el articulo del servicio

  }

  borrarArticulo(){
    this.servicioArticulos.deleteArticulo(this.articulo.id)
    //Aquí debería ir una redirección a la página de inicio pero yo lo he hecgo directamente en el html con routerlink
    //Salva lo hace de este modo aunque hay que hacer importaciones 
  }
}
