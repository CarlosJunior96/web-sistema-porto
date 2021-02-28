import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EstoqueAgua} from '../models/estoque/estoque-agua';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';
import {EstoqueCombustivel} from '../models/estoque/estoque-combustivel';
import {EstoqueOleo} from '../models/estoque/estoque-oleo';

@Injectable({
  providedIn: 'root'
})
export class EstoqueNavioService {

  constructor(private http: HttpClient) { }

  cadastrarEstoqueAguaNavio(estoqueAgua: EstoqueAgua) : Observable<any>{
    return this.http.post(UrlsApiPorto.urlCadastrarEstoqueAguaNavio, estoqueAgua);
  }

  cadastrarEstoqueCombustivelNavio(estoqueCombustivel: EstoqueCombustivel) : Observable<any>{
    return this.http.post(UrlsApiPorto.urlCadastrarEstoqueCombustivelNavio, estoqueCombustivel);
  }

  cadastrarEstoqueOleoNavio(estoqueOleo: EstoqueOleo) : Observable<any>{
    return this.http.post(UrlsApiPorto.urlCadastrarEstoqueOleoNavio, estoqueOleo);
  }
}
