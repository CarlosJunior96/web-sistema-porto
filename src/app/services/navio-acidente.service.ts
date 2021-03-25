import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AcidenteNavio} from '../models/acidente-navio';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class NavioAcidenteService {

  constructor(private http: HttpClient) { }

  cadastrarAcidenteNavio(acidenteNavio: AcidenteNavio): Observable<any>{
    return this.http.post(UrlsApiPorto.urlCadastrarAcidentesNavio, acidenteNavio);
  }

  salvarArquivoAcidente(acidenteFile: FormData): Observable<any>{
    return this.http.post(UrlsApiPorto.urlUploadArquivoAcidente, acidenteFile);
  }
}
