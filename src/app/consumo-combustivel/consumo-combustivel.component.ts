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
  navio: Navio;

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
    this.consumoCombustivelNavio = new CombustivelNavio();

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  criarConsumoCombustivel(dadosCombustivel: any){

    /**
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
    **/
  }

}
