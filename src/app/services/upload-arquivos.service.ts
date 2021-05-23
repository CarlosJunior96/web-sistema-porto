import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadArquivosService {

  constructor(
    private http: HttpClient
  ) { }

  enviarArquivo(arquivoGeral: FormData, urlEnviar: string) : Observable<any>{
    return this.http.post(urlEnviar, arquivoGeral);
  }
}
