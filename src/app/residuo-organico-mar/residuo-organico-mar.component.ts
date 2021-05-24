import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ResiduoOrganicoNavio} from '../models/residuo-organico-navio';
import {Router} from '@angular/router';
import {ResiduoOrganicoService} from '../services/residuo-organico.service';
import {InicioService} from '../services/inicio.service';
import {Navio} from '../models/navio';

@Component({
  selector: 'app-residuo-organico-mar',
  templateUrl: './residuo-organico-mar.component.html',
  styleUrls: ['./residuo-organico-mar.component.css']
})
export class ResiduoOrganicoMarComponent implements OnInit {

  residuoOrganicoNavio: ResiduoOrganicoNavio
  navio: Navio

  constructor(
    private rotas: Router,
    private residuoOrganicoService: ResiduoOrganicoService,
    private inicioService: InicioService
    ) { }

  ngOnInit(): void {
    this.residuoOrganicoNavio = new ResiduoOrganicoNavio();

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.residuoOrganicoNavio.navioResiduo = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  mascaraLongitude(){
    let longitude = (<HTMLInputElement>document.getElementById("longitude-residuo")).value
    let longitudeFormatada;

    if (longitude.length === 10){
      const parte1 = longitude.slice(0,3) + "°";
      const parte2 = longitude.slice(3,5) + ".";
      const parte3 = longitude.slice(5,9) + "'";
      const parte4 = " " + longitude.slice(9,10).toUpperCase();
      longitudeFormatada = parte1 + parte2 + parte3 + parte4;
    }

    if (longitudeFormatada != undefined){
      //(<HTMLInputElement>document.getElementById("longitude-residuo")).value = longitudeFormatada;
      this.residuoOrganicoNavio.longitude = longitudeFormatada;
    }

  }

  mascaraLatitude(){
    let latitude = (<HTMLInputElement>document.getElementById("latitude-residuo")).value
    let latitudeFormatada;

    if (latitude.length === 10){
      const parte1 = latitude.slice(0,3) + "°";
      const parte2 = latitude.slice(3,5) + ".";
      const parte3 = latitude.slice(5,9) + "'";
      const parte4 = " " + latitude.slice(9,10).toUpperCase();
      latitudeFormatada = parte1 + parte2 + parte3 + parte4;
    }

    if (latitudeFormatada != undefined){
      this.residuoOrganicoNavio.latitude = latitudeFormatada //(<HTMLInputElement>document.getElementById("latitude-residuo")).value = latitudeFormatada;
    }

  }

  criarResiduoOrganico(dadosResiduo: any){
      this.residuoOrganicoService.criarResiduoOrganicoNavio(this.residuoOrganicoNavio).subscribe( residuoOrganicoDados => {
        let residuoOrganico = residuoOrganicoDados;
        alert("Salvo com Sucesso!")

        dadosResiduo.reset()
      }, error => {
        console.log("Erro ao cadastrar residuo orgânico.", error);
      })
  }

  formatarNumero(){
    let valor = Number((<HTMLInputElement>document.activeElement).value);
    let contador = (<HTMLInputElement>document.activeElement).selectionStart;
    (<HTMLInputElement>document.activeElement).value = valor.toFixed(2);
    (<HTMLInputElement>document.activeElement).selectionStart = contador;
    (<HTMLInputElement>document.activeElement).selectionEnd = contador;
  }
}
