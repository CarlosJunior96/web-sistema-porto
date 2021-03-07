import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DescarteLixo} from '../models/descarte-lixo';

@Component({
  selector: 'app-descarte-lixo-navio',
  templateUrl: './descarte-lixo-navio.component.html',
  styleUrls: ['./descarte-lixo-navio.component.css']
})
export class DescarteLixoNavioComponent implements OnInit {

  categorias: any = [
    {categoria: "A"},
    {categoria: "B"},
    {categoria: "C"},
    {categoria: "D"},
    {categoria: "E"},
    {categoria: "F"},
    {categoria: "G"},
    {categoria: "H"},
    {categoria: "I"},
    {categoria: "J"},
    {categoria: "K"},
  ];
  vetorCidades: any = [
    {cidade: "Arraial do Cabo"},
    {cidade: "Açu"},
    {cidade: "Aracaju"},
    {cidade: "Macaé"},
    {cidade: "Natal"},
    {cidade: "Niterói"},
    {cidade: "Vitória"},
    {cidade: "Itajaí"}
  ];

  objetoDescarteLixo: DescarteLixo;

  constructor() { }

  ngOnInit(): void {
    this.objetoDescarteLixo = new DescarteLixo();
  }

  criarDescarteLixo(dadosDescarte: any){

  }

}
