import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TripulacaoNavio} from '../models/tripulacao-navio';

@Component({
  selector: 'app-tripulacao-navio',
  templateUrl: './tripulacao-navio.component.html',
  styleUrls: ['./tripulacao-navio.component.css']
})
export class TripulacaoNavioComponent implements OnInit {

  objetoTripulacaoNavio: TripulacaoNavio;

  constructor() { }

  ngOnInit(): void {
    this.objetoTripulacaoNavio = new TripulacaoNavio();
  }

  cadastrarTripulacao(dadosTripulacao: any){

  }
}
