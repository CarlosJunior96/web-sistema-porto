import { Component, OnInit } from '@angular/core';

/** importando classes para trabalhar com formulários **/
import { FormControl, FormGroup} from '@angular/forms';
import {AguaNavio} from '../models/agua-navio';
import {Navio} from '../models/navio';
import {AguaNavioService} from '../services/agua-navio.service';
import {Router, Routes} from '@angular/router';
import {InicioService} from '../services/inicio.service';
import {UploadArquivosService} from '../services/upload-arquivos.service';
import {UrlsApiPorto} from '../urls-api-porto';

@Component({
  selector: 'app-consumo-agua',
  templateUrl: './consumo-agua.component.html',
  styleUrls: ['./consumo-agua.component.css']
})
export class ConsumoAguaComponent implements OnInit {

  navio: Navio;
  aguaNavio: AguaNavio;
  inicio: InicioService;
  imo: string;
  fileAgua: any;

  constructor(
    private inicioService: InicioService,
    private aguaNavioService: AguaNavioService,
    private rotas: Router,
    private uploadArquivosService: UploadArquivosService
  ) { }

  ngOnInit() {
    this.aguaNavio = new AguaNavio();
    this.fileAgua = [];

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  criarConsumoAgua(dadosConsumoAgua: any){
    this.aguaNavio.navioAgua = this.navio
    this.aguaNavioService.criarAguaNavio(this.aguaNavio).subscribe(aguaNavioDados => {
      alert("Salvo com Sucesso!")
      if (this.fileAgua.length > 0){
        for (var i = 0; i < this.fileAgua.length; i++){
          let listaArquivosAgua = new FormData();
          listaArquivosAgua.append("arquivo-agua", this.fileAgua[i]);
          this.uploadArquivosService.enviarArquivo(listaArquivosAgua, UrlsApiPorto.urlUploadConsumoAgua).subscribe( informacao => {

          }), error => {
            alert("Erro ao salvar arquivo!!!");
          }
        }
      }
      this.aguaNavio = new AguaNavio();
      this.excluirArquivoAgua();
    }, error => {
      alert("Erro ao cadastrar consumo de água!");
    })
  }

  uploadArquivoAgua(event){
    if(event.target.files && event.target.files[0]){
      this.fileAgua = event.target.files

      var elemento = (<HTMLInputElement>document.getElementById("label-file-agua"))
      elemento.innerHTML = "";
      this.fileAgua = event.target.files
      let i = 1;
      for (let aux of this.fileAgua){

        if(i < this.fileAgua.length ){
          elemento.innerHTML += aux.name + ", "
        }

        if(i === this.fileAgua.length){
          elemento.innerHTML += aux.name
        }
        i++;
      }
    }
  }

  excluirArquivoAgua(){
    this.fileAgua = []
    var elemento = (<HTMLInputElement>document.getElementById("label-file-agua"))
    elemento.innerHTML = "Enviar Arquivo";
  }

  formatarNumero(){
    let valor = Number((<HTMLInputElement>document.activeElement).value);
    let contador = (<HTMLInputElement>document.activeElement).selectionStart;
    (<HTMLInputElement>document.activeElement).value = valor.toFixed(2);
    (<HTMLInputElement>document.activeElement).selectionStart = contador;
    (<HTMLInputElement>document.activeElement).selectionEnd = contador;
  }

}
