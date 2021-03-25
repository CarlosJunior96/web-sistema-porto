import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AcidenteNavio} from '../models/acidente-navio';
import {Navio} from '../models/navio';
import {InicioService} from '../services/inicio.service';
import {Router} from '@angular/router';
import {NavioAcidenteService} from '../services/navio-acidente.service';

@Component({
  selector: 'app-acidente-navio',
  templateUrl: './acidente-navio.component.html',
  styleUrls: ['./acidente-navio.component.css']
})
export class AcidenteNavioComponent implements OnInit {

  navio: Navio;
  objetoAcidente: AcidenteNavio;
  arquivoUpload: any;

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

  constructor(
    private inicioService: InicioService,
    private acidenteService: NavioAcidenteService,
    private rotas: Router
  ) {
  }

  ngOnInit(): void {
    this.objetoAcidente = new AcidenteNavio();

    if (sessionStorage.getItem("imo")) {
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe(navioBanco => {
        this.navio = navioBanco;
      })
    } else {
      this.rotas.navigate([('home')])
    }
  }

  cadastrarAcidente(dadosAcidente: any) {
    this.objetoAcidente.navioAcidente = this.navio;
    const tamanho = this.arquivoUpload.length;

    this.acidenteService.cadastrarAcidenteNavio(this.objetoAcidente).subscribe(dadosAcidente => {
      if (tamanho > 0){
        for( var i = 0; i < tamanho; i++){
          let listarArquivos = new FormData();
          listarArquivos.append("acidente", this.arquivoUpload[i]);
          this.acidenteService.salvarArquivoAcidente(listarArquivos).subscribe( informacao => {
            console.log("Salvo!");
          })
        }
      }
      alert("Salvo com Sucesso!");
      dadosAcidente.reset();
    }), error => {
      alert("Erro ao Cadastrar Acidentes!")
    }

  }

  uploadArquivoAcidente(event){
    if(event.target.files && event.target.files[0]){
      this.arquivoUpload = event.target.files;
    }
  }
}
