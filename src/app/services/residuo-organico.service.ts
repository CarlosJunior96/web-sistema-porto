import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResiduoOrganicoNavio} from '../models/residuo-organico-navio';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class ResiduoOrganicoService {

  constructor(private http: HttpClient) { }

  criarResiduoOrganicoNavio(residuoOrganicoNavio: ResiduoOrganicoNavio) : Observable<any>{
    return this.http.post(UrlsApiPorto.urlResiduoOrganicoCadastrar, residuoOrganicoNavio);
  }
}
