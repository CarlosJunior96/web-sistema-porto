import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Navio} from '../models/navio';
import {CombustivelNavio} from '../models/combustivel-navio';
import {Router} from '@angular/router';
import {InicioService} from '../services/inicio.service';
import {ConsumoCombustivelService} from '../services/consumo-combustivel.service';

@Component({
  selector: 'app-consumo-combustivel',
  templateUrl: './consumo-combustivel.component.html',
  styleUrls: ['./consumo-combustivel.component.css']
})
export class ConsumoCombustivelComponent implements OnInit {

  consumoCombustivelNavio: CombustivelNavio;
  combustivelTipo: string;
  combustivelForm: FormGroup;
  imo: string;

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
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.imo = sessionStorage.getItem("imo");
    this.consumoCombustivelNavio = new CombustivelNavio();
    this.combustivelTipo;
    this.combustiveisLista;
/**
    if (this.imo === null){
      this.rotas.navigate([("home")])
    }
    else {**/
      this.combustivelForm = new FormGroup({
        data: new FormControl(""),
        consumoCombustivel: new FormControl(""),
        qtdCombustivelRecebido: new FormControl(""),
        qtdCombustivelFornecido: new FormControl("")
      });
    //}
  }

  criarConsumoCombustivel(){
    let dadosCombustivel = this.combustivelForm.value
    this.consumoCombustivelNavio.consumoNoDia = dadosCombustivel.consumoCombustivel;
    this.consumoCombustivelNavio.diaDoConsumo = new Date(dadosCombustivel.data);
    this.consumoCombustivelNavio.combustivelFornecidoDia = dadosCombustivel.qtdCombustivelFornecido;
    this.consumoCombustivelNavio.combustivelRecebidoDia = dadosCombustivel.qtdAguaRecebida;
    this.consumoCombustivelNavio.tipo = this.combustivelTipo

    this.inicioService.procurarNavioImo(this.imo).subscribe( navioImo => {
      this.consumoCombustivelNavio.navioCombustivel = navioImo;

      this.consumoCombustivelService.criarConsumoCombustivel(this.consumoCombustivelNavio).subscribe( consumoCombustivelDados => {
        var consumoCombustivel = consumoCombustivelDados;
        console.log(consumoCombustivel);
      }, error => {
        console.log("Erro ao cadastrar consumo de combustível.", error);
      })

    }, error => {
      console.log("Erro ao cadastrar consumo de combustível.", error);
    })

  }

}
