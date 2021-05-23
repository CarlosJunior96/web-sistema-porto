import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OleoLubrificanteNavio} from '../models/oleo-lubrificante-navio';
import {Router} from '@angular/router';
import {OleoLubrificanteService} from '../services/oleo-lubrificante.service';
import {Navio} from '../models/navio';
import {InicioService} from '../services/inicio.service';
import {UrlsApiPorto} from '../urls-api-porto';
import {UploadArquivosService} from '../services/upload-arquivos.service';

@Component({
  selector: 'app-consumo-oleo',
  templateUrl: './consumo-oleo.component.html',
  styleUrls: ['./consumo-oleo.component.css']
})
export class ConsumoOleoComponent implements OnInit {

  oleoLubrificanteNavio: OleoLubrificanteNavio;
  navio: Navio;
  fileOleo: any;

  constructor(
    private rotas: Router,
    private oleoLubrificanteService: OleoLubrificanteService,
    private inicioService: InicioService,
    private uploadArquivosService: UploadArquivosService
  ) { }

  ngOnInit(): void {
    this.oleoLubrificanteNavio = new OleoLubrificanteNavio();
    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  criarConsumoOleo(dadosOleo: any){

      this.oleoLubrificanteNavio.navioOleo = this.navio;
      this.oleoLubrificanteService.criarConsumoOleoLubrificante(this.oleoLubrificanteNavio).subscribe( oleoLubrificanteDados => {
        let oleoConsumo = oleoLubrificanteDados;
        alert("Salvo com Sucesso!");

        if (this.fileOleo.length > 0){
          for (var i = 0; i < this.fileOleo.length; i++){
            let listaArquivosAgua = new FormData();
            listaArquivosAgua.append("arquivo-oleo-lubrificante", this.fileOleo[i]);
            this.uploadArquivosService.enviarArquivo(listaArquivosAgua, UrlsApiPorto.urlUploadOleoLubrificante).subscribe( informacao => {

            }), error => {
              alert("Erro ao salvar arquivo!!!");
            }
          }
        }

        dadosOleo.reset()
        this.excluirArquivoOleo()
      }, error => {
        alert("Erro ao cadastrar óleo lubrificante.");
      })
  }

  uploadArquivoOleo(event){
    if(event.target.files && event.target.files[0]){
      this.fileOleo = event.target.files

      var elemento = (<HTMLInputElement>document.getElementById("label-file-oleo"))
      elemento.innerHTML = "";
      this.fileOleo = event.target.files
      let i = 1;
      for (let aux of this.fileOleo){

        if(i < this.fileOleo.length ){
          elemento.innerHTML += aux.name + ", "
        }

        if(i === this.fileOleo.length){
          elemento.innerHTML += aux.name
        }
        i++;
      }
    }
  }

  excluirArquivoOleo(){
    this.fileOleo = []
    var elemento = (<HTMLInputElement>document.getElementById("label-file-oleo"))
    elemento.innerHTML = "Enviar Arquivo";
  }

}
