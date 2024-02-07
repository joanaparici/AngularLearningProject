import { Component } from '@angular/core';
import { ServicioHTTPService } from '../Servicios/http-service.service';
import { Cliente } from '../Modelos/cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  constructor(private miServicio: ServicioHTTPService) {}

  clientes!: Cliente[];
  idCliente!: number;
  cliente: Cliente = { id: 0, nombre: '', cargo: '' };
  clienteNuevo: Cliente = { id: 0, nombre: '', cargo: '' };

  ngOnInit() {
    this.miServicio.getClientes().subscribe({
      next: (datos) => (this.clientes = datos),
      error: (error) =>
        console.log(`Error: ${error.status} ${error.statusText}`),
    });

    this.loadClientes();
  }

  ver(id: number) {
    this.miServicio.getCliente(id).subscribe((datos) => console.log(datos));
  }

  verCliente() {
    this.miServicio
      .getCliente(this.idCliente)
      .subscribe((dato) => (this.cliente = dato));
  }

  nuevoCliente() {
    this.miServicio
      .postCliente(this.clienteNuevo)
      .subscribe((dato) => (this.cliente = dato));
    this.loadClientes();
  }

  loadClientes() {
    this.miServicio.getClientes().subscribe({
      next: (datos) => (this.clientes = datos),
      error: (error) =>
        console.log(`Error: ${error.status} ${error.statusText}`),
    });
  }

  modificarCliente() {
    this.miServicio
      .putCliente(this.cliente)
      .subscribe((dato) => (this.cliente = dato));
    this.loadClientes();
  }

  borrarCliente(id: number) {
    this.miServicio.deleteCliente(id).subscribe();
    this.loadClientes();
  }
}
