import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ResiduoOrganicoNavio} from '../models/residuo-organico-navio';
import {Router} from '@angular/router';
import {ResiduoOrganicoService} from '../services/residuo-organico.service';
import {InicioService} from '../services/inicio.service';

@Component({
  selector: 'app-residuo-organico-mar',
  templateUrl: './residuo-organico-mar.component.html',
  styleUrls: ['./residuo-organico-mar.component.css']
})
export class ResiduoOrganicoMarComponent implements OnInit {

  residuoOrganicoNavio: ResiduoOrganicoNavio

  constructor(
    private rotas: Router,
    private residuoOrganicoService: ResiduoOrganicoService,
    private inicioService: InicioService
    ) { }

  ngOnInit(): void {
    this.residuoOrganicoNavio = new ResiduoOrganicoNavio();

    /**
     *
     this.imo = sessionStorage.getItem("imo");

     if (this.imo === null){
      this.rotas.navigate([("home")])
    }
     */
  }

  criarResiduoOrganico(dadosResiduo: any){

    /**
    this.inicioService.procurarNavioImo(this.imo).subscribe( navioImo => {
      this.residuoOrganicoNavio.navioResiduo = navioImo;

      this.residuoOrganicoService.criarResiduoOrganicoNavio(this.residuoOrganicoNavio).subscribe( residuoOrganicoDados => {
        let residuoOrganico = residuoOrganicoDados;
        console.log(residuoOrganico);
      }, error => {
        console.log("Erro ao cadastrar residuo orgânico.", error);
      })


    }, error => {
      console.log("Erro ao cadastrar resíduo orgânico.");
    })
  }
**/
  }
}
