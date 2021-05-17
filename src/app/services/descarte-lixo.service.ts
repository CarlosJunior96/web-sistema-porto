import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DescarteLixo} from '../models/descarte-lixo';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class DescarteLixoService {

  constructor(private http: HttpClient) { }

  criarDescarteLixo(descarteLixo: DescarteLixo): Observable<any>{
    return this.http.post(UrlsApiPorto.urlCadastrarDescarteLixo, descarteLixo);
  }

  salvarReciboAcidente(recibo: FormData) : Observable<any>{
    return this.http.post(UrlsApiPorto.urlUploadReciboDescarte, recibo);
  }
}
