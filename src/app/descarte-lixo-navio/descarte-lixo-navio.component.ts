import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DescarteLixo} from '../models/descarte-lixo';
import {Navio} from '../models/navio';
import {InicioService} from '../services/inicio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-descarte-lixo-navio',
  templateUrl: './descarte-lixo-navio.component.html',
  styleUrls: ['./descarte-lixo-navio.component.css']
})
export class DescarteLixoNavioComponent implements OnInit {

  categorias: any = [
    {categoria: "A"},
    {categoria: "B"},
    {categoria: "C"},
    {categoria: "D"},
    {categoria: "E"},
    {categoria: "F"},
    {categoria: "G"},
    {categoria: "H"},
    {categoria: "I"},
    {categoria: "J"},
    {categoria: "K"},
  ];
  vetorCidades: any = [
    {cidade: "Arraial do Cabo"},
    {cidade: "Açu"},
    {cidade: "Aracaju"},
    {cidade: "Macaé"},
    {cidade: "Natal"},
    {cidade: "Niterói"},
    {cidade: "Vitória"},
    {cidade: "Itajaí"}
  ];
  navio: Navio;

  objetoDescarteLixo: DescarteLixo;

  constructor(
    private inicioService: InicioService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.objetoDescarteLixo = new DescarteLixo();

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  criarDescarteLixo(dadosDescarte: any){

  }

}
