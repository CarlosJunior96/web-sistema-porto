import { Component, OnInit } from '@angular/core';
import {NavioService} from '../../services/navio.service';
import {InicioService} from '../../services/inicio.service';
import {Router} from '@angular/router';
import {Navio} from '../../models/navio';

@Component({
  selector: 'app-estoque-navio-admin',
  templateUrl: './estoque-navio-admin.component.html',
  styleUrls: ['./estoque-navio-admin.component.css']
})
export class EstoqueNavioAdminComponent implements OnInit {

  listaNavios: Array<Navio>;
  navio: Navio;

  constructor(
    private navioService: NavioService,
    private inicioService: InicioService,
    private rotas: Router) { }

  ngOnInit(): void {
    this.navio = new Navio();
    this.listaNavios = [];
    this.receberListaNavios();
  }

  receberListaNavios(){
    this.inicioService.listarNavios().subscribe( lista => {
      this.listaNavios = lista;
    })
  }

  verEstoqueNavio(navio: any){
    sessionStorage.setItem("idNavio", navio.id);
    this.rotas.navigate([('lista-estoque-navio')]);
  }


}
