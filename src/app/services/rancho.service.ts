import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rancho} from '../models/rancho';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class RanchoService {

  constructor(
    private http: HttpClient
  ) { }

  criarRanchoNavio(rancho: Rancho) : Observable<any>{
    return this.http.post(UrlsApiPorto.urlCadastrarRanchoNavio, rancho);
  }

  salvarRecibo(recibo: FormData) : Observable<any>{
    return this.http.post(UrlsApiPorto.urlUploadReciboRancho, recibo);
  }
}
