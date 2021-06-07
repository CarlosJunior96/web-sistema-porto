import { Component, OnInit } from '@angular/core';
import {NavioService} from '../../../services/navio.service';
import {Router} from '@angular/router';
import {EstoqueAgua} from '../../../models/estoque/estoque-agua';
import {Navio} from '../../../models/navio';

@Component({
  selector: 'app-lista-estoque-navio',
  templateUrl: './lista-estoque-navio.component.html',
  styleUrls: ['./lista-estoque-navio.component.css']
})
export class ListaEstoqueNavioComponent implements OnInit {

  estoqueAgua: EstoqueAgua;
  navio: Navio;
  constructor(
    private navioService: NavioService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.estoqueAgua = new EstoqueAgua();
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
  }

}
