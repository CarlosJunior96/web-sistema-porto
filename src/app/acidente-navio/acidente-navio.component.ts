import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-acidente-navio',
  templateUrl: './acidente-navio.component.html',
  styleUrls: ['./acidente-navio.component.css']
})
export class AcidenteNavioComponent implements OnInit {

  evento: string
  afastamento: string
  downtime: string
  acidenteForm: FormGroup;

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

  constructor() { }

  ngOnInit(): void {
    this.acidenteForm = new FormGroup( {
      diaAcidente: new FormControl("")
    })
  }


  cadastrarAcidente(){

  }

}
