import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Navio} from '../models/navio';
import {CombustivelNavio} from '../models/combustivel-navio';
import {Router} from '@angular/router';
import {InicioService} from '../services/inicio.service';
import {ConsumoCombustivelService} from '../services/consumo-combustivel.service';
import {UploadArquivosService} from '../services/upload-arquivos.service';
import {UrlsApiPorto} from '../urls-api-porto';

@Component({
  selector: 'app-consumo-combustivel',
  templateUrl: './consumo-combustivel.component.html',
  styleUrls: ['./consumo-combustivel.component.css']
})
export class ConsumoCombustivelComponent implements OnInit {

  consumoCombustivelNavio: CombustivelNavio;
  navio: Navio;
  arquivoCombustivel: any;

  combustiveisLista: any = [
    {valor: "MGO"},
    {valor: "MDO"},
    {valor: "IFO"},
    {valor: "MFO"},
    {valor: "HFO"},
  ];

  constructor(
    private consumoCombustivelService: ConsumoCombustivelService,
    private inicioService: InicioService,
    private rotas: Router,
    private uploadArquivosService: UploadArquivosService
  ) { }

  ngOnInit(): void {
    this.consumoCombustivelNavio = new CombustivelNavio();
    this.arquivoCombustivel = []

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  criarConsumoCombustivel(dadosCombustivel: any){
    this.consumoCombustivelNavio.navioCombustivel = this.navio;
    this.consumoCombustivelService.criarConsumoCombustivel(this.consumoCombustivelNavio).subscribe( dados => {
      alert("Salvo com Sucesso!");

      if (this.arquivoCombustivel.length > 0){
        for (var i = 0; i < this.arquivoCombustivel.length; i++){
          let listaCombustivelFile = new FormData();
          listaCombustivelFile.append("arquivo-combustivel", this.arquivoCombustivel[i]);
          this.uploadArquivosService.enviarArquivo(listaCombustivelFile, UrlsApiPorto.urlUploadCombustivel).subscribe( info => {

          }), error => {
            alert("Erro ao salvar arquivo")
          }
        }
      }

      dadosCombustivel.reset()
      this.excluirArquivoCombustivel()
    }, error => {
      alert("Erro ao salvar!")
    })
  }


  uploadArquivoCombustivel(event){
    if(event.target.files && event.target.files[0]){
      this.arquivoCombustivel = event.target.files
      var elemento = (<HTMLInputElement>document.getElementById("label-arquivo-combustivel"))
      elemento.innerHTML = "";
      this.arquivoCombustivel = event.target.files
      let i = 1;
      for (let aux of this.arquivoCombustivel){

        if(i < this.arquivoCombustivel.length ){
          elemento.innerHTML += aux.name + ", "
        }

        if(i === this.arquivoCombustivel.length){
          elemento.innerHTML += aux.name
        }
        i++;
      }
    }
  }

  excluirArquivoCombustivel(){
    this.arquivoCombustivel = []
    var elemento = (<HTMLInputElement>document.getElementById("label-arquivo-combustivel"))
    elemento.innerHTML = "Enviar Arquivo";
  }

}
