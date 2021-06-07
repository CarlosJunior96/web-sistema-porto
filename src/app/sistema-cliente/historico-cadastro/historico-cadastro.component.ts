import { Component, OnInit } from '@angular/core';
import {Navio} from '../../models/navio';
import {InicioService} from '../../services/inicio.service';
import {Router, Routes} from '@angular/router';
import {HistoricoDadosService} from '../../services/historico-dados.service';
import {AguaNavio} from '../../models/agua-navio';
import {CombustivelNavio} from '../../models/combustivel-navio';
import {OleoLubrificanteNavio} from '../../models/oleo-lubrificante-navio';
import {ResiduoOrganicoNavio} from '../../models/residuo-organico-navio';
import {Rancho} from '../../models/rancho';
import {DescarteLixo} from '../../models/descarte-lixo';
import {DespesaNavio} from '../../models/despesa-navio';
import {AcidenteNavio} from '../../models/acidente-navio';
import {TripulacaoNavio} from '../../models/tripulacao-navio';
import {Downtime} from '../../models/downtime';
import {InspecoesNavio} from '../../models/inspecoes-navio';

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
  despesaHistorico: DespesaNavio;
  acidenteHistorico: AcidenteNavio;
  tripulacaoNavio: TripulacaoNavio;
  downtimeHistoricoNavio: Downtime;
  inspecaoNavioHistorico: InspecoesNavio;

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
    this.despesaHistorico = new DespesaNavio();
    this.ranchoHistorico = new Rancho();
    this.acidenteHistorico = new AcidenteNavio();
    this.tripulacaoNavio = new TripulacaoNavio();
    this.downtimeHistoricoNavio = new Downtime();
    this.inspecaoNavioHistorico = new InspecoesNavio();

    if (sessionStorage.getItem("imo")) {
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe(navioBanco => {
        this.navio = navioBanco;

        this.historicoConsumoAgua()
        this.historicoCombustivel()
        this.historicoOleoLubrificante()
        this.historicoResiduoOrganico()
        this.historicoRancho()
        this.historicoDescarteLixo()
        this.historicoDespesaNavio()
        this.historicoAcidenteNavio()
        this.historicoTripulacao()
        this.historicoDowntime()
        this.historicoInspecao()
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
    })
  }

  historicoDespesaNavio(){
    this.historicoDadosService.historicoDespesaPortuaria(this.navio.id).subscribe( despesaDados => {
      this.despesaHistorico = despesaDados;
      this.despesaHistorico.diaDespesa = new Date(this.despesaHistorico.diaDespesa);
    })
  }

  historicoAcidenteNavio(){
    this.historicoDadosService.historicoAcidenteNavio(this.navio.id).subscribe( acidenteDados => {
      this.acidenteHistorico = acidenteDados
      this.acidenteHistorico.diaAcidente = new Date(this.acidenteHistorico.diaAcidente)
    })
  }

  historicoTripulacao(){
    this.historicoDadosService.historicoTripulacao(this.navio.id).subscribe( tripulacaoDados => {
      this.tripulacaoNavio = tripulacaoDados;
    })
  }

  historicoDowntime(){
    this.historicoDadosService.historicoDowntime(this.navio.id).subscribe( downtimeHistorico => {
      this.downtimeHistoricoNavio = downtimeHistorico;
      this.downtimeHistoricoNavio.dataInicio = new Date(this.downtimeHistoricoNavio.dataInicio);
      this.downtimeHistoricoNavio.dataTermino = new Date(this.downtimeHistoricoNavio.dataTermino);
    })
  }

  historicoInspecao(){
    this.historicoDadosService.historicoInspecao(this.navio.id).subscribe( inspecaoHistorico => {
      this.inspecaoNavioHistorico = inspecaoHistorico;
      this.inspecaoNavioHistorico.dataInspecao = new Date(this.inspecaoNavioHistorico.dataInspecao);
    })
  }


}
