import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CombustivelNavio} from '../models/combustivel-navio';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class ConsumoCombustivelService {

  constructor(
    private http: HttpClient
  ) { }

  criarConsumoCombustivel(consumoCombustivel: CombustivelNavio) : Observable<any>{
    return this.http.post(UrlsApiPorto.urlConsumoCombustivelNavioCadastrar, consumoCombustivel);
  }
}
