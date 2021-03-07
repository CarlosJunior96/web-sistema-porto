import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tripulacao-navio',
  templateUrl: './tripulacao-navio.component.html',
  styleUrls: ['./tripulacao-navio.component.css']
})
export class TripulacaoNavioComponent implements OnInit {

  tripulacaoForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.tripulacaoForm = new FormGroup( {
      funcao: new FormControl(""),
      turma: new FormControl(""),
      salario: new FormControl(""),
      encargos: new FormControl(""),
      custoMensal: new FormControl("")
    })
  }

  cadastrarTripulacao(){

  }
}
