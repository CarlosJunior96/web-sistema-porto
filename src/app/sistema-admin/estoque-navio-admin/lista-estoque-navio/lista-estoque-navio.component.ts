import { Component, OnInit } from '@angular/core';
import {NavioService} from '../../../services/navio.service';
import {Router} from '@angular/router';
import {EstoqueAgua} from '../../../models/estoque/estoque-agua';
import {Navio} from '../../../models/navio';
import {EstoqueOleo} from '../../../models/estoque/estoque-oleo';
import {EstoqueCombustivel} from '../../../models/estoque/estoque-combustivel';

@Component({
  selector: 'app-lista-estoque-navio',
  templateUrl: './lista-estoque-navio.component.html',
  styleUrls: ['./lista-estoque-navio.component.css']
})
export class ListaEstoqueNavioComponent implements OnInit {

  estoqueAgua: EstoqueAgua;
  estoqueOleo: EstoqueOleo;
  estoqueCombustivel: EstoqueCombustivel;

  navio: Navio;
  constructor(
    private navioService: NavioService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.estoqueAgua = new EstoqueAgua();
    this.estoqueOleo = new EstoqueOleo();
    this.estoqueCombustivel = new EstoqueCombustivel();

    this.navio = new Navio();
    if (sessionStorage.getItem("idNavio") === "0"){
      this.rotas.navigate([("navio-admin")])
    }
    else {
      this.receberEstoque();
      sessionStorage.setItem("idNavio", "0");
    }
  }

  receberEstoque(){
    let idNavio = sessionStorage.getItem("idNavio");

    this.navioService.listaEstoqueAgua(idNavio).subscribe( estoqueAgua => {
      this.estoqueAgua = estoqueAgua;
      this.estoqueAgua.dataEstoque = new Date(this.estoqueAgua.dataEstoque);
      this.navio = estoqueAgua.navioEstoque;
    })

    this.navioService.listaEstoqueOleo(idNavio).subscribe( estoqueOleo => {
      this.estoqueOleo = estoqueOleo;
      this.estoqueOleo.dataEstoque = new Date(this.estoqueOleo.dataEstoque);
    })

    this.navioService.listaEstoqueCombustivel(idNavio).subscribe( estoqueCombustivel => {
      this.estoqueCombustivel = estoqueCombustivel;
      this.estoqueCombustivel.dataEstoque = new Date(this.estoqueCombustivel.dataEstoque);
    })
  }

}
