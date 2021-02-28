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

  aguaReceberFomulario: FormGroup;
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
    this.imo = sessionStorage.getItem("imo")

   /** if (this.imo === null){
      this.rotas.navigate([("home")])
    }
    else {**/
      this.aguaReceberFomulario = new FormGroup({
        dataInformar: new FormControl(""),
        consumoAgua: new FormControl(""),
        qtdAguaRecebida: new FormControl(""),
        qtdAguaFornecida: new FormControl("")
      });
  //  }
  }

  criarConsumoAgua(){
    let valores = this.aguaReceberFomulario.value
    this.aguaNavio.diaDoConsumo = new Date(valores.dataInformar)
    this.aguaNavio.consumoNoDia = valores.consumoAgua
    this.aguaNavio.aguaFornecidaNoDia = valores.qtdAguaFornecida
    this.aguaNavio.aguaRecebidaNoDia = valores.qtdAguaRecebida

    this.inicioService.procurarNavioImo(this.imo).subscribe( navioImo => {
      this.aguaNavio.navioAgua = navioImo;

      this.aguaNavioService.criarAguaNavio(this.aguaNavio).subscribe(aguaNavioDados => {
        let aguaConsumo = aguaNavioDados;
        console.log(aguaConsumo);
      }, error => {
        console.log("Erro ao cadastrar consumo de agua.", error);
      })

    }, error => {
      alert("Navio não informado!")
    })
  }


}
