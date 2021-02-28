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
  imo: string;
  oleoForm: FormGroup;

  constructor(
    private rotas: Router,
    private oleoLubrificanteService: OleoLubrificanteService,
    private inicioService: InicioService
  ) { }

  ngOnInit(): void {
    this.oleoLubrificanteNavio = new OleoLubrificanteNavio();
    this.imo = sessionStorage.getItem("imo");

    //if (this.imo === null){
      //this.rotas.navigate([("home")])
    //}
    //else{
      this.oleoForm = new FormGroup({
        data: new FormControl(""),
        consumoOleo: new FormControl(""),
        qtdOleoRecebido: new FormControl(""),
        qtdOleoFornecido: new FormControl("")
      })
    //}



  }

  criarConsumoOleo(){
    let valores = this.oleoForm.value
    this.oleoLubrificanteNavio.diaDoConsumo = new Date(valores.data);
    this.oleoLubrificanteNavio.consumoNoDia = valores.consumoOleo;
    this.oleoLubrificanteNavio.oleoFornecidoDia = valores.qtdOleoFornecido;
    this.oleoLubrificanteNavio.oleoRecebidoDia = valores.qtdAguaRecebida;

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
  }

}
