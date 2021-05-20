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

  uploadRelatorioInspecao(event){

  }

  uploadPlanoDeAcao(event){

  }

  uploadArquivoAcaoCorretiva(event){

  }

  adicionarPendencia(){
    this.listaPendencia.push(this.pendencia);
    this.pendencia = new Pendencias();
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
    console.info(this.listaPendencia);
    formPendencia.reset()
  }

  fecharPendencia(){
    var classeFechar = (<HTMLInputElement>document.getElementById("enviar-arquivos-classe")).className;
    classeFechar = classeFechar.replace(" desativar-div", "");
    (<HTMLInputElement>document.getElementById("enviar-arquivos-classe")).className = classeFechar;
  }

}
