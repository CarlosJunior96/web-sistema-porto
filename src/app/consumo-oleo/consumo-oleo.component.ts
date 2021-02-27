import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-consumo-oleo',
  templateUrl: './consumo-oleo.component.html',
  styleUrls: ['./consumo-oleo.component.css']
})
export class ConsumoOleoComponent implements OnInit {

  oleoForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.oleoForm = new FormGroup({
      data: new FormControl(""),
      consumoOleo: new FormControl(""),
      qtdOleoRecebido: new FormControl(""),
      qtdOleoFornecido: new FormControl("")
    })
  }

  criarConsumoOleo(){
    let dadosOleo = this.oleoForm.value
    let dados = dadosOleo
  }

}
