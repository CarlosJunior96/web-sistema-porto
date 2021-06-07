import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Navio} from '../models/navio';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class NavioService {

  constructor(private http: HttpClient) { }

  cadastrarNavio(navio: Navio): Observable<any>{
    return this.http.post(UrlsApiPorto.urlCadastrarNavio, navio);
  }

  atualizarNavio(idNavio: any, navio: Navio): Observable<any>{
    return this.http.put(UrlsApiPorto.urlAtualizarNavio + idNavio, navio);
  }

  excluirNavio(idNavio: any): Observable<any>{
    return this.http.delete(UrlsApiPorto.urlExcluirNavio + idNavio);
  }

  listaEstoqueAgua(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlGetListaEstoqueAgua + idNavio);
  }

  listaEstoqueCombustivel(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlGetListaEstoqueCombustivel + idNavio);
  }

  listaEstoqueOleo(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlGetListaEstoqueOleo + idNavio);
  }
}
