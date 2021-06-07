import { Component, OnInit } from '@angular/core';
import {Downtime} from '../../models/downtime';
import {InicioService} from '../../services/inicio.service';
import {Router} from '@angular/router';
import {DowntimeService} from '../../services/downtime.service';

@Component({
  selector: 'app-downtime-navio',
  templateUrl: './downtime-navio.component.html',
  styleUrls: ['./downtime-navio.component.css']
})
export class DowntimeNavioComponent implements OnInit {

  downtime: Downtime;

  constructor(private inicioService: InicioService,
              private rotas: Router,
              private downtimeService: DowntimeService) { }

  ngOnInit(): void {
    this.downtime = new Downtime();

    if (sessionStorage.getItem("imo")) {
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe(navioBanco => {
        this.downtime.navio = navioBanco;
      })
    } else {
      this.rotas.navigate([('home')])
    }
  }

  criarDowntime(downtimeDados: any){
    this.downtimeService.criarDowntime(this.downtime).subscribe( dados => {
      alert("Salvo com Sucesso!")

      downtimeDados.reset()
    }, error => {
      alert("Erro ao Criar Downtime!")
    })
  }



}
