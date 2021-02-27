import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class  InicioService {

  constructor(private http: HttpClient) { }

  procurarNavioImo(imo: string): Observable<any>{
    return this.http.get(UrlsApiPorto.urlFindNavioIMO + imo);
  }
}
