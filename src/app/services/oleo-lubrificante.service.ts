import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OleoLubrificanteNavio} from '../models/oleo-lubrificante-navio';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class OleoLubrificanteService {

  constructor(
    private http: HttpClient
  ) { }

  criarConsumoOleoLubrificante(oleoLubrificanteNavio: OleoLubrificanteNavio) : Observable<any>{
    return this.http.post(UrlsApiPorto.urlConsumoOleoLubriricanteCadastrar, oleoLubrificanteNavio);
  }
}
