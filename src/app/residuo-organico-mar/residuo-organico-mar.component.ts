import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-residuo-organico-mar',
  templateUrl: './residuo-organico-mar.component.html',
  styleUrls: ['./residuo-organico-mar.component.css']
})
export class ResiduoOrganicoMarComponent implements OnInit {

  residuoOrganicoForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.residuoOrganicoForm = new FormGroup({
      data: new FormControl(""),
      residuoOrganico: new FormControl(""),
      latitude: new FormControl(""),
      longitude: new FormControl(""),
    })
  }

  criarResiduoOrganico(){
    let dadosResiduoOrganico = this.residuoOrganicoForm.value
    console.log(dadosResiduoOrganico);
  }

}
