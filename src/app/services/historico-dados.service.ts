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
}
