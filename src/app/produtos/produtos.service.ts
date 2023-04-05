import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from './produtos/produtos';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  url = 'http://localhost:3000/produto'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os produtos
  getProdutos(): Observable<Produtos[]> {
    return this.httpClient.get<Produtos[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

   // Obtem um produto pelo id
   getProdutoById(id: number): Observable<Produtos> {
    return this.httpClient.get<Produtos>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
// salva um produto
saveProduto(produto: Produtos): Observable<Produtos> {
  return this.httpClient.post<Produtos>(this.url, JSON.stringify(produto), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}
// utualiza um produto
updateProduto(produto: Produtos): Observable<Produtos> {
  return this.httpClient.put<Produtos>(this.url + '/' + produto.id, JSON.stringify(produto), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
}
 // deleta um produto
 deleteProduto(produto: Produtos) {
  return this.httpClient.delete<Produtos>(this.url + '/' + produto.id, this.httpOptions)
    .pipe(
      retry(1),
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
