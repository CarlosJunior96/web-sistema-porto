import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OleoLubrificanteNavio} from '../models/oleo-lubrificante-navio';
import {Router} from '@angular/router';
import {OleoLubrificanteService} from '../services/oleo-lubrificante.service';
import {Navio} from '../models/navio';
import {InicioService} from '../services/inicio.service';

@Component({
  selector: 'app-consumo-oleo',
  templateUrl: './consumo-oleo.component.html',
  styleUrls: ['./consumo-oleo.component.css']
})
export class ConsumoOleoComponent implements OnInit {

  oleoLubrificanteNavio: OleoLubrificanteNavio;
  navio: Navio;

  constructor(
    private rotas: Router,
    private oleoLubrificanteService: OleoLubrificanteService,
    private inicioService: InicioService
  ) { }

  ngOnInit(): void {
    this.oleoLubrificanteNavio = new OleoLubrificanteNavio();
    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  criarConsumoOleo(dadosOleo: any){

    /**

    this.inicioService.procurarNavioImo(this.imo).subscribe( navioImo =>{
      this.oleoLubrificanteNavio.navioOleo = navioImo;

      this.oleoLubrificanteService.criarConsumoOleoLubrificante(this.oleoLubrificanteNavio).subscribe( oleoLubrificanteDados => {
        let oleoConsumo = oleoLubrificanteDados;
        console.log(oleoConsumo);
      }, error => {
        console.log("Erro ao cadastrar óleo lubrificante.", error);
      })

    }, error => {
      console.log("Erro ao cadastrar óleo lubrificante.", error);
    })
     **/
  }

}
