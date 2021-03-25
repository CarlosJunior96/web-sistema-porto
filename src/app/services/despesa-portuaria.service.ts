import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DespesaNavio} from '../models/despesa-navio';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class DespesaPortuariaService {

  constructor(private http: HttpClient) { }

  criarDespesasPortuariaNavio(despesaPortuaria: DespesaNavio): Observable<any>{
    return this.http.post(UrlsApiPorto.urlCadastrarDespesaPortuaria, despesaPortuaria);
  }
}
