import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Cliente } from '../Modelos/cliente';
@Injectable({
  providedIn: 'root',
})
export class ServicioHTTPService {
  constructor(private miHTTP: HttpClient) {}
  url = 'http://localhost:3000/clientes';

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Error de conexión:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend error codigo ${error.status}, mensaje: `,
        error.statusText
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getClientes(): Observable<Cliente[]> {
    return this.miHTTP.get<Cliente[]>(this.url).pipe(retry(1));
  }

  getCliente(id: number): Observable<Cliente> {
    return this.miHTTP
      .get<Cliente>(this.url + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.miHTTP
      .post<Cliente>(this.url, cliente)
      .pipe(retry(1), catchError(this.handleError));
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    return this.miHTTP
      .put<Cliente>(this.url + '/' + cliente.id, cliente)
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteCliente(id: number): Observable<Cliente> {
    return this.miHTTP
      .delete<Cliente>(this.url + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
}
