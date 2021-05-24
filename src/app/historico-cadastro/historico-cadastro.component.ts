import { Component, OnInit } from '@angular/core';
import {Navio} from '../models/navio';
import {InicioService} from '../services/inicio.service';
import {Router, Routes} from '@angular/router';
import {HistoricoDadosService} from '../services/historico-dados.service';
import {AguaNavio} from '../models/agua-navio';
import {CombustivelNavio} from '../models/combustivel-navio';
import {OleoLubrificanteNavio} from '../models/oleo-lubrificante-navio';
import {ResiduoOrganicoNavio} from '../models/residuo-organico-navio';
import {Rancho} from '../models/rancho';
import {DescarteLixo} from '../models/descarte-lixo';

@Component({
  selector: 'app-historico-cadastro',
  templateUrl: './historico-cadastro.component.html',
  styleUrls: ['./historico-cadastro.component.css']
})
export class HistoricoCadastroComponent implements OnInit {
  navio: Navio;
  dataAgua: any;
  aguaNavioHistorico: AguaNavio;
  combustivelNavioHistorico: CombustivelNavio;
  oleoLubrificanteHistorico: OleoLubrificanteNavio;
  residuoOrganicoHistorico: ResiduoOrganicoNavio;
  ranchoHistorico: Rancho;
  historicoDescarteLixoNavio: DescarteLixo;

  constructor(
    private inicioService: InicioService,
    private rotas: Router,
    private historicoDadosService: HistoricoDadosService
  ) { }

  ngOnInit(): void {
    this.navio = new Navio();
    this.aguaNavioHistorico = new AguaNavio();
    this.combustivelNavioHistorico = new CombustivelNavio();
    this.oleoLubrificanteHistorico = new OleoLubrificanteNavio();
    this.residuoOrganicoHistorico = new ResiduoOrganicoNavio();
    this.historicoDescarteLixoNavio = new DescarteLixo();

    if (sessionStorage.getItem("imo")) {
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe(navioBanco => {
        this.navio = navioBanco;

        this.historicoConsumoAgua()
        this.historicoCombustivel()
        this.historicoOleoLubrificante()
        this.historicoResiduoOrganico()
        this.historicoRancho()
        this.historicoDescarteLixo()
      })
    } else {
      this.rotas.navigate([('home')])
    }

  }

  historicoConsumoAgua(){
    this.historicoDadosService.historicoAguaConsumo(this.navio.id).subscribe( aguaHistorico => {
      this.aguaNavioHistorico = aguaHistorico;
      this.aguaNavioHistorico.diaDoConsumo = new Date(this.aguaNavioHistorico.diaDoConsumo);
    })
  }

  historicoCombustivel(){
    this.historicoDadosService.historicoCombustivel(this.navio.id).subscribe( combustivelHistorico => {
      this.combustivelNavioHistorico = combustivelHistorico;
      this.combustivelNavioHistorico.diaDoConsumo = new Date(this.combustivelNavioHistorico.diaDoConsumo);
    })
  }

  historicoOleoLubrificante(){
    this.historicoDadosService.historicoOleoLubrificante(this.navio.id).subscribe( oleoHistorico => {
      this.oleoLubrificanteHistorico = oleoHistorico;
      this.oleoLubrificanteHistorico.diaDoConsumo = new Date(this.oleoLubrificanteHistorico.diaDoConsumo);
    })
  }

  historicoResiduoOrganico(){
    this.historicoDadosService.historicoResiduoOrganico(this.navio.id).subscribe( residuoHistorico => {
      this.residuoOrganicoHistorico = residuoHistorico;
      this.residuoOrganicoHistorico.diaDescarteResiduo = new Date(this.residuoOrganicoHistorico.diaDescarteResiduo)
    })
  }

  historicoRancho(){
    this.historicoDadosService.historicoRancho(this.navio.id).subscribe( ranchoHistorico => {
      this.ranchoHistorico = ranchoHistorico;
      this.ranchoHistorico.diaRecebimento = new Date(this.ranchoHistorico.diaRecebimento);
    })
  }

  historicoDescarteLixo(){
    this.historicoDadosService.historicoDescarte(this.navio.id).subscribe( lixoHistorico => {
      this.historicoDescarteLixoNavio = lixoHistorico;
      this.historicoDescarteLixoNavio.diaDescarte = new Date(this.historicoDescarteLixoNavio.diaDescarte);
      alert(this.historicoDescarteLixoNavio.diaDescarte);
    })
  }

}
