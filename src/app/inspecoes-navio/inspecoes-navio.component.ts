import { Component, OnInit } from '@angular/core';
import {InspecoesNavio} from '../models/inspecoes-navio';
import {Pendencias} from '../models/pendencias';
import {log} from 'util';

@Component({
  selector: 'app-inspecoes-navio',
  templateUrl: './inspecoes-navio.component.html',
  styleUrls: ['./inspecoes-navio.component.css']
})
export class InspecoesNavioComponent implements OnInit {

  inspecao: InspecoesNavio;

  fileAcaoCorretiva: any;
  fileInspecao: any;
  filePlanoAcao: any;

  pendencia: Pendencias;
  listaPendencia: Array<Pendencias>;
  condicaoFecharDiv: any;

  listaInspecao: any = [
    {tipo: "BAD"},
    {tipo: "GINSP"},
    {tipo: "CPRA"},
    {tipo: "PORT STATE"},
    {tipo: "ANVISA"},
    {tipo: "AUDITORIA INTERNA ISM/ISPS"},
    {tipo: "PEOTRAM"},
    {tipo: "IBAMA"},
    {tipo: "CLASSE"}
  ]
  listaCategorias: any = [
    {categoria: "IMPEDITIVO"},
    {categoria: "NÃO IMPEDITIVO"},
    {categoria: "AS"}
  ]
  status: any = [
    {situacao: "CONCLUÍDO"},
    {situacao: "EM ABERTO"}
  ]

  constructor() { }

  ngOnInit(): void {
    this.inspecao = new InspecoesNavio();
    this.pendencia = new Pendencias();
    this.listaPendencia = [];
    this.condicaoFecharDiv = false;

  }

  salvarInspecao(dadosInspecao: any){
    console.info(this.inspecao);
    dadosInspecao.reset()
    this.listaPendencia = [];
  }

  uploadRelatorioInspecao(event){
    if(event.target.files && event.target.files[0]){
      this.fileInspecao = event.target.files
    }
  }

  uploadPlanoDeAcao(event){
    if(event.target.files && event.target.files[0]){
      this.filePlanoAcao = event.target.files
    }
  }

  uploadArquivoAcaoCorretiva(event){
    if(event.target.files && event.target.files[0]){
      this.fileAcaoCorretiva = event.target.files
    }
  }

  adicionarPendencia(){
    this.listaPendencia.push(this.pendencia);
    this.pendencia = new Pendencias();
  }
  salvarValores(tipo: any){
    console.info(tipo);
  }
  adicionarAcaoCorretiva(){
    var acaoCorretiva = (<HTMLInputElement>document.getElementById("acao-corretiva")).value;
    var listaAcaoCorretiva = (<HTMLInputElement>document.getElementById("lista-acao-corretiva")).innerHTML;
    listaAcaoCorretiva = listaAcaoCorretiva + '<li class="list-group-item">' + acaoCorretiva + '</li>';
    (<HTMLInputElement>document.getElementById("lista-acao-corretiva")).innerHTML = listaAcaoCorretiva;
    (<HTMLInputElement>document.getElementById("acao-corretiva")).value = ""
  }

  mostrarDiv(idDiv){
    var idDivPendencia = (<HTMLInputElement>document.getElementById(idDiv)).style.display;

    if (idDivPendencia === "none"){
      (<HTMLInputElement>document.getElementById(idDiv)).style.display = "block";
      (<HTMLInputElement>document.getElementById("enviar-arquivos-classe")).className += " desativar-div";
      (<HTMLInputElement>document.getElementById("botao-adicionar-pendencia")).style.display = "none";
    }
  }

  salvarPendencia(formPendencia: any){
    (<HTMLInputElement>document.getElementById("div-inserir-pendencia")).style.display = "none";
    (<HTMLInputElement>document.getElementById("botao-adicionar-pendencia")).style.display = "block";
    //formPendencia.reset()
  }
  fecharPendencia(){
    var classeFechar = (<HTMLInputElement>document.getElementById("enviar-arquivos-classe")).className;
    classeFechar = classeFechar.replace(" desativar-div", "");
    (<HTMLInputElement>document.getElementById("enviar-arquivos-classe")).className = classeFechar;


  }

  excluirPendencia(posicao: any){
    for(let aux of this.listaPendencia){
      if(posicao === this.listaPendencia.indexOf(aux)){
        this.listaPendencia.splice(posicao, 1);
      }
    }
  }

}
