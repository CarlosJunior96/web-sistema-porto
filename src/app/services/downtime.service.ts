import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Downtime} from '../models/downtime';
import {Observable} from 'rxjs';
import {UrlsApiPorto} from '../urls-api-porto';

@Injectable({
  providedIn: 'root'
})
export class DowntimeService {

  constructor(private http: HttpClient) { }

  criarDowntime(downtime: Downtime): Observable<any>{
    return this.http.post(UrlsApiPorto.urlCriarDowntime, downtime);
  }
}
