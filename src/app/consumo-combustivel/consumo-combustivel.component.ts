import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-consumo-combustivel',
  templateUrl: './consumo-combustivel.component.html',
  styleUrls: ['./consumo-combustivel.component.css']
})
export class ConsumoCombustivelComponent implements OnInit {

  combustivel: string;
  combustivelForm: FormGroup;

   combustiveisLista: any = [
    {valor: "MGO"},
    {valor: "MDO"},
    {valor: "IFO"},
    {valor: "MFO"},
    {valor: "HFO"},
  ];

  constructor() { }

  ngOnInit(): void {
    this.combustivel
    this.combustiveisLista
    sessionStorage.getItem("imo");
    this.combustivelForm = new FormGroup({
      data: new FormControl(""),
      tipoCombustivel: new FormControl(""),
      consumoCombustivel: new FormControl(""),
      qtdCombustivelRecebido: new FormControl(""),
      qtdCombustivelFornecido: new FormControl("")
    })
  }

  criarConsumoCombustivel(){
    let dadosCombustivel = this.combustivelForm.value
    let soma = dadosCombustivel
  }

}
