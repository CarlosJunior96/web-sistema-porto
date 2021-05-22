import { Component, OnInit } from '@angular/core';
import {InspecoesNavio} from '../models/inspecoes-navio';
import {Pendencias} from '../models/pendencias';
import {log} from 'util';
import {AguaNavio} from '../models/agua-navio';
import {InicioService} from '../services/inicio.service';
import {Router} from '@angular/router';
import {InspecaoService} from '../services/inspecao.service';

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
  inicio: InicioService;
  objetoInspecao: InspecoesNavio;

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

  constructor(
    private inicioService: InicioService,
    private rotas: Router,
    private inspecaoService: InspecaoService
  ) { }

  ngOnInit(): void {

    this.inspecao = new InspecoesNavio();
    this.pendencia = new Pendencias();
    this.listaPendencia = new Array<Pendencias>();
    this.objetoInspecao = new InspecoesNavio();
    this.condicaoFecharDiv = false;

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.inspecao.navioInspecao = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }


  }

  salvarInspecao(dadosInspecao: any){
    this.inspecaoService.cadastrarInspecao(this.inspecao).subscribe( dados => {
      /** salvando as pendencias **/
      if (this.listaPendencia.length > 0){
        this.objetoInspecao = dados;
        /* vinculando a inspecao a cada item da pendecia */
        for(let aux of this.listaPendencia){
          aux.inspecaoNavio = this.objetoInspecao;
        }
        console.info(this.listaPendencia);
        this.inspecaoService.salvarListaPendencias(this.listaPendencia).subscribe( dadosLista => {
          console.info("Deu certo!!!");
        }, error => {
          alert("Erro ao salvar Lista de Pêndencias");
        })
      }

      alert("Salvo com Sucesso!")
      this.listaPendencia = [];
    }, error => {
      alert("Erro ao salvar inspeção!")
    })

    dadosInspecao.reset();

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
