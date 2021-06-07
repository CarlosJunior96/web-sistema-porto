import { Component, OnInit } from '@angular/core';
import {Navio} from '../../models/navio';
import {InicioService} from '../../services/inicio.service';
import {Router} from '@angular/router';
import {NavioService} from '../../services/navio.service';

@Component({
  selector: 'app-navio-admin',
  templateUrl: './navio-admin.component.html',
  styleUrls: ['./navio-admin.component.css']
})
export class NavioAdminComponent implements OnInit {

  listaNavios: Array<Navio>;
  navio: Navio;

  constructor(
    private navioService: NavioService,
    private inicioService: InicioService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.navio = new Navio();
    this.receberListaNavios();
    this.listaNavios = [];
    this.receberListaNavios();
  }

  receberListaNavios(){
    this.inicioService.listarNavios().subscribe( lista => {
      this.listaNavios = lista;
      this.formatarDataLista();
    })
  }

  formatarDataLista(){
    for (let elementoLista of this.listaNavios){
      elementoLista.anoConstrucao = new Date(elementoLista.anoConstrucao);
      elementoLista.proximaDocagem = new Date(elementoLista.proximaDocagem);
    }
  }

  editarNavio(navio: any){
    let imo = navio.imo
    sessionStorage.setItem("imo", imo);
    this.rotas.navigate([("cadastrar-navio")])
  }

  excluirNavio(navio: any){
    this.navioService.excluirNavio(navio.id).subscribe();
    alert("Excluído com Sucesso!")
    location.reload()
  }

  criarNavio(){
    this.rotas.navigate([("cadastrar-navio")])
  }

}
