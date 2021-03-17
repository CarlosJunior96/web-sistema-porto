import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AcidenteNavio} from '../models/acidente-navio';
import {Navio} from '../models/navio';
import {InicioService} from '../services/inicio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-acidente-navio',
  templateUrl: './acidente-navio.component.html',
  styleUrls: ['./acidente-navio.component.css']
})
export class AcidenteNavioComponent implements OnInit {

  navio: Navio;
  objetoAcidente: AcidenteNavio;

  listaEvento: any = [
    {tipo: "Abalroamento"},
    {tipo: "Acidente Pessoal"},
    {tipo: "Colisão"},
    {tipo: "Falha de Equipamento"},
    {tipo: "Poluição"},
    {tipo: "Proteção"}
  ]

  listaAfastamento: any = [
    {situacao: "Sim"},
    {situacao: "Não"}
  ]

  listaDowntime: any = [
    {situacao: "Sim"},
    {situacao: "Não"}
  ]

  constructor(
    private inicioService: InicioService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.objetoAcidente = new AcidenteNavio();

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }


  cadastrarAcidente(dadosAcidente: any){

  }

}
