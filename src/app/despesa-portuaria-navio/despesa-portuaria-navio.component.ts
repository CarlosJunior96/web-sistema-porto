import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {DespesaNavio} from '../models/despesa-navio';

@Component({
  selector: 'app-despesa-portuaria-navio',
  templateUrl: './despesa-portuaria-navio.component.html',
  styleUrls: ['./despesa-portuaria-navio.component.css']
})
export class DespesaPortuariaNavioComponent implements OnInit {

  objetoDespesa: DespesaNavio;

  listaServicos: any = [
    {tipo: "Praticagem"},
    {tipo: "Anvisa"},
    {tipo: "Coleta de Lixo"},
    {tipo: "Lancha de Transporte"},
    {tipo: "Agência"}
  ];

  constructor() { }

  ngOnInit(): void {
    this.objetoDespesa = new DespesaNavio()
  }

  criarDespesaNavio(dadosDespesa: any){

    dadosDespesa.reset()
  }
}
