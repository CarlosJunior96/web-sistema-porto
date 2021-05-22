import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Navio} from '../models/navio';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';
import {InspecoesNavio} from '../models/inspecoes-navio';
import {Pendencias} from '../models/pendencias';

@Injectable({
  providedIn: 'root'
})
export class InspecaoService {
  constructor(private http: HttpClient) { }

  cadastrarInspecao(inspecao: InspecoesNavio): Observable<any>{
    return this.http.post(UrlsApiPorto.urlCriarInspecaoNavio, inspecao);
  }

  salvarListaPendencias(lista: Array<any>){
    console.info(lista);
    return this.http.post(UrlsApiPorto.urlSalvarListaPendencias, lista);
  }
}
