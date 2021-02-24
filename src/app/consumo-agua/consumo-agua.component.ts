import { Component, OnInit } from '@angular/core';

/** importando classes para trabalhar com formulários **/
import { FormControl, FormGroup} from '@angular/forms';
import {AguaNavio} from '../models/agua-navio';
import {Navio} from '../models/navio';
import {AguaNavioService} from '../services/agua-navio.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-consumo-agua',
  templateUrl: './consumo-agua.component.html',
  styleUrls: ['./consumo-agua.component.css']
})
export class ConsumoAguaComponent implements OnInit {

  aguaReceberFomulario: FormGroup;
  aguaNavio: AguaNavio;
  navio: Navio;

  constructor(
    private aguaNavioService: AguaNavioService,
    private rotas: Router
  ) { }

  ngOnInit() {
    this.aguaNavio = new AguaNavio();

    this.aguaReceberFomulario = new FormGroup({
      dataInformar: new FormControl(""),
      consumoAgua: new FormControl(""),
      qtdAguaRecebida: new FormControl(""),
      qtdAguaFornecida: new FormControl("")
    });
  }

  cadastrarNavio(){
    //this.navio = new Navio("NAVIO A", "5000 GT", 2, "AZIMUTAL", 9000.0, 2000.0,
      //600.0, 100.0, "50T", 7777777, "ABW3D", new Date("01/02/2021"), new Date("01/01/2030"));

    this.aguaNavioService.cadastrarNavio(this.navio).subscribe(dadosNavio =>{
      var n1 = dadosNavio;
      console.log(n1);
    }, error => {
      console.log("Erro ao cadastrar navio!", error);
    })
  }

  criarConsumoAgua(){
    let valores = this.aguaReceberFomulario.value
    this.aguaNavio.diaDoConsumo = new Date(valores.dataInformar)
    this.aguaNavio.consumoNoDia = valores.consumoAgua
    this.aguaNavio.aguaFornecidaNoDia = valores.qtdAguaFornecida
    this.aguaNavio.aguaRecebidaNoDia = valores.qtdAguaRecebida
    this.aguaNavio.navioAgua = this.navio

    this.aguaNavioService.criarAguaNavio(this.aguaNavio).subscribe(aguaNavioDados =>{
      var aguaConsumo = aguaNavioDados;
      this.rotas.navigate[('')]
      console.log(aguaConsumo);
    }, error => {
      console.log("Erro ao cadastrar consumo de agua.", error);
    })
  }

  listarNavios(){
    this.aguaNavioService.listarNavios().subscribe(navios =>{
      var navios = navios;
      console.log(navios);

      }, error => {
      console.log("Erro ao listar Navios!", error);
      }
    )
  }

}
