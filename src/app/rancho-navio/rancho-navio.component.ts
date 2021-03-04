import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rancho-navio',
  templateUrl: './rancho-navio.component.html',
  styleUrls: ['./rancho-navio.component.css']
})
export class RanchoNavioComponent implements OnInit {

  pedidoTipo: string;
  ranchoForm: FormGroup;

  tipoPedido: any = [
    {tipo: "Completo"},
    {tipo: "Complemento"}
  ];

  constructor() { }

  ngOnInit(): void {
    this.ranchoForm = new FormGroup( {
      diaRecebimento: new FormControl(""),
      nfAlimentos: new FormControl(""),
      nfOutros: new FormControl(""),
      valorTotal: new FormControl("")
    })
  }

  criarRanchoNavio(){

  }

  somar(evento: any){
    let dados = evento.value
    this.ranchoForm = new FormGroup( {
      valorTotal: new FormControl(dados)
    })

  }

}
