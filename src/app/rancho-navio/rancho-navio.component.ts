import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {Rancho} from '../models/rancho';

@Component({
  selector: 'app-rancho-navio',
  templateUrl: './rancho-navio.component.html',
  styleUrls: ['./rancho-navio.component.css']
})
export class RanchoNavioComponent implements OnInit {

  objetoRancho: Rancho;

  tipoPedido: any = [
    {tipo: "Completo"},
    {tipo: "Complemento"}
  ];

  constructor() { }

  ngOnInit(): void {
    this.objetoRancho = new Rancho();
  }

  criarRanchoNavio(dadosRancho: any){

  }

}
