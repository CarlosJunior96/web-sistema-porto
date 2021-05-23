import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TripulacaoNavio} from '../models/tripulacao-navio';
import {Navio} from '../models/navio';
import {InicioService} from '../services/inicio.service';
import {Router} from '@angular/router';
import {TripulacaoNavioService} from '../services/tripulacao-navio.service';

@Component({
  selector: 'app-tripulacao-navio',
  templateUrl: './tripulacao-navio.component.html',
  styleUrls: ['./tripulacao-navio.component.css']
})
export class TripulacaoNavioComponent implements OnInit {

  objetoTripulacaoNavio: TripulacaoNavio;
  navio: Navio;

  constructor(
    private inicioService: InicioService,
    private tripulacaoNavioService: TripulacaoNavioService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.objetoTripulacaoNavio = new TripulacaoNavio();

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.objetoTripulacaoNavio.navioTripulacao = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  cadastrarTripulacao(dadosTripulacao: any){
    this.tripulacaoNavioService.cadastrarTripulacao(this.objetoTripulacaoNavio).subscribe( dados => {
      alert("Salvo com Sucesso!");
      dadosTripulacao.reset();
    }), error => {
      alert("Erro ao salvar Tripulação!!!");
    }
  }
}
