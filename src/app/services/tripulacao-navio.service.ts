import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TripulacaoNavio} from '../models/tripulacao-navio';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class TripulacaoNavioService {

  constructor(private http: HttpClient) { }

  cadastrarTripulacao(tripulacaoNavio: TripulacaoNavio): Observable<any>{
    return this.http.post(UrlsApiPorto.urlCadastrarTripulacao, tripulacaoNavio);
  }
}
