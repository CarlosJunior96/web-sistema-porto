import { Component, OnInit } from '@angular/core';

/** importando classes para trabalhar com formulários **/
import { FormControl, FormGroup} from '@angular/forms';
import {AguaNavio} from '../models/agua-navio';
import {Navio} from '../models/navio';
import {AguaNavioService} from '../services/agua-navio.service';
import {Router, Routes} from '@angular/router';
import {InicioService} from '../services/inicio.service';

@Component({
  selector: 'app-consumo-agua',
  templateUrl: './consumo-agua.component.html',
  styleUrls: ['./consumo-agua.component.css']
})
export class ConsumoAguaComponent implements OnInit {

  navio: Navio;
  aguaNavio: AguaNavio;
  inicio: InicioService;
  imo: string;

  constructor(
    private inicioService: InicioService,
    private aguaNavioService: AguaNavioService,
    private rotas: Router
  ) { }

  ngOnInit() {
    this.aguaNavio = new AguaNavio();

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  criarConsumoAgua(dadosConsumoAgua: any){
    this.aguaNavio.navioAgua = this.navio
    this.aguaNavioService.criarAguaNavio(this.aguaNavio).subscribe(aguaNavioDados => {
      alert("Salvo com Sucesso!")
    }, error => {
      alert("Erro ao cadastrar consumo de água!");
    })

    dadosConsumoAgua.reset();
  }


}
