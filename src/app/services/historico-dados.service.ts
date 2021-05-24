import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class HistoricoDadosService {

  constructor(private http: HttpClient) { }

  historicoAguaConsumo(idNavio: any) : Observable<any>{
    return this.http.get(UrlsApiPorto.urlHistoricoConsumoAgua + "/" + idNavio);
  }

  historicoCombustivel(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlHistoricoCombustivel + idNavio)
  }

  historicoOleoLubrificante(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlHistoricoOleo + idNavio)
  }

  historicoResiduoOrganico(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlHistoricoResiduo + idNavio)
  }

  historicoRancho(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlHistoricoRancho + idNavio)
  }

  historicoDescarte(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlHistoricoDescarteLixo + idNavio)
  }

  historicoDespesaPortuaria(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlHistoricoDespesaPortuaria + idNavio);
  }

  historicoAcidenteNavio(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlHistoricoAcidente + idNavio);
  }

  historicoTripulacao(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlTripulacao + idNavio);
  }

  historicoDowntime(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlDowntime + idNavio);
  }

  historicoInspecao(idNavio: any): Observable<any>{
    return this.http.get(UrlsApiPorto.urlHistoricoInspecao + idNavio);
  }
}
