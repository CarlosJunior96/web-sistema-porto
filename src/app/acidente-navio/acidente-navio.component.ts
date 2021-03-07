import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acidente-navio',
  templateUrl: './acidente-navio.component.html',
  styleUrls: ['./acidente-navio.component.css']
})
export class AcidenteNavioComponent implements OnInit {

  evento: string
  afastamento: string
  downtime: string

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
  }

}
