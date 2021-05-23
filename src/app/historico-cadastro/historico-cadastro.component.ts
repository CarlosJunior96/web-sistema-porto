import { Component, OnInit } from '@angular/core';
import {Navio} from '../models/navio';
import {InicioService} from '../services/inicio.service';
import {Router, Routes} from '@angular/router';
import {HistoricoDadosService} from '../services/historico-dados.service';
import {AguaNavio} from '../models/agua-navio';

@Component({
  selector: 'app-historico-cadastro',
  templateUrl: './historico-cadastro.component.html',
  styleUrls: ['./historico-cadastro.component.css']
})
export class HistoricoCadastroComponent implements OnInit {
  navio: Navio;
  dataAgua: any;
  aguaNavioHistorico: AguaNavio;


  constructor(
    private inicioService: InicioService,
    private rotas: Router,
    private historicoDadosService: HistoricoDadosService
  ) { }

  ngOnInit(): void {
    this.navio = new Navio();
    this.aguaNavioHistorico = new AguaNavio();

    if (sessionStorage.getItem("imo")) {
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe(navioBanco => {
        this.navio = navioBanco;

        this.historicoConsumoAgua()
      })
    } else {
      this.rotas.navigate([('home')])
    }

  }

  historicoConsumoAgua(){
    this.historicoDadosService.historicoAguaConsumo(this.navio.id).subscribe( aguaHistorico => {
      this.aguaNavioHistorico = aguaHistorico;
      this.aguaNavioHistorico.diaDoConsumo = new Date(this.aguaNavioHistorico.diaDoConsumo);
      console.info(aguaHistorico);
    })
  }

  historicoCombustivel(){

  }

}
