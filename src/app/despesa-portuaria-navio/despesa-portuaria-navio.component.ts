import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-despesa-portuaria-navio',
  templateUrl: './despesa-portuaria-navio.component.html',
  styleUrls: ['./despesa-portuaria-navio.component.css']
})
export class DespesaPortuariaNavioComponent implements OnInit {

  tipoServico: string;
  despesaPortuariaForm: FormGroup;

  listaServicos: any = [
    {tipo: "Praticagem"},
    {tipo: "Anvisa"},
    {tipo: "Coleta de Lixo"},
    {tipo: "Lancha de Transporte"},
    {tipo: "Agência"}
  ];

  constructor() { }

  ngOnInit(): void {
    this.despesaPortuariaForm = new FormGroup( {
      diaDespesa: new FormControl(""),
      valor: new FormControl("")
    })
  }

  criarDespesaNavio(){

  }
}
