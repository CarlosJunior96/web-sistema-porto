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
}
