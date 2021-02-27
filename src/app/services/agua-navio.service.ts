import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AguaNavio} from '../models/agua-navio';
import {UrlsApiPorto} from '../urls-api-porto';
import {Observable} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {Navio} from '../models/navio';

@Injectable({
  providedIn: 'root'
})
export class AguaNavioService {

  constructor(private http: HttpClient) { }

  criarAguaNavio(aguaNavio: AguaNavio) : Observable<any>{
    return this.http.post("http://localhost:8080/sistema-porto/consumo-agua/", aguaNavio);
  }

}
