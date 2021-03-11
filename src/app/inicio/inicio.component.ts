import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InicioService} from '../services/inicio.service';
import {Router} from '@angular/router';
import {Navio} from '../models/navio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  /**listaNavios: any = [
    {nome: "Navio A", imo: "123456"},
    {nome: "Navio B", imo: "567897"},
    {nome: "Navio C", imo: "121547"},
    {nome: "Navio D", imo: "154789"},
    {nome: "Navio D", imo: "154789"},
    {nome: "Navio D", imo: "154789"}
  ]**/
  listaNavios: Array<Navio>
  imoNavio: string;
  navio: Navio;
  constructor(
    private inicioService: InicioService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.imoNavio = "0";
    this.navio = new Navio();
    this.receberListaNavios();
  }

  receberListaNavios(){
    this.inicioService.listarNavios().subscribe( lista => {
      this.listaNavios = lista
      console.info(this.listaNavios);
    })
  }

  selecionarNavio(imo: any){
    this.imoNavio = String(imo)
    this.inicioService.procurarNavioImo(this.imoNavio).subscribe(navioImo => {
      this.navio = navioImo;
      sessionStorage.setItem("imo", this.imoNavio)
      this.rotas.navigate([("agua-navio")])
    }, error => {
      alert("Erro ao Logar!")
      this.rotas.navigate([("home")])
    })
  }


}
