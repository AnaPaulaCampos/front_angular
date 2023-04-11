import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Vendas } from './vendas';



@Injectable({
  providedIn: 'root'
})
export class VendasService {
  getVendas() {
    throw new Error("Method not implemented.");
  }
  deleteVenda(venda: Vendas) {
    throw new Error("Method not implemented.");
  }

  url = 'http://localhost:3000/vendas';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  create(Vendas: Vendas): Observable<Vendas> {
    return this.httpClient.post<Vendas>(this.url, JSON.stringify(Vendas), this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
    }
    // deleta uma venda
 deleteVendas(Vendas: Vendas) {
  return this.httpClient.delete<Vendas>(this.url + '/' + Vendas.id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    }
     // atualiza uma venda
     updateVenda(Vendas: Vendas): Observable<Vendas> {
      return this.httpClient.put<Vendas>(this.url + '/' + Vendas.id, JSON.stringify(Vendas), this.httpOptions)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }
   
  // Obtem todos as vendas
  getVenda(): Observable<Vendas[]>{
   return this.httpClient.get<Vendas[]>(this.url)
   .pipe(
    retry(2),
    catchError(this.handleError))
 }
//Obtem uma venda pelo id
getVendaById(id: number): Observable<Vendas> {
  return this.httpClient.get<Vendas>(this.url + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

    
    // Manipulação de erros
 handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Erro ocorreu no lado do client
    errorMessage = error.error.message;
  } else {
    // Erro ocorreu no lado do servidor
    errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);

};

  }