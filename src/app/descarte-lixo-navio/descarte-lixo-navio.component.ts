import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DescarteLixo} from '../models/descarte-lixo';
import {Navio} from '../models/navio';
import {InicioService} from '../services/inicio.service';
import {Router} from '@angular/router';
import {DescarteLixoService} from '../services/descarte-lixo.service';

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
  navio: Navio;
  arquivoUpload: any;

  objetoDescarteLixo: DescarteLixo;

  constructor(
    private inicioService: InicioService,
    private descarteLixoService: DescarteLixoService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.objetoDescarteLixo = new DescarteLixo();

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }
    else {
      this.rotas.navigate([('home')])
    }
  }

  criarDescarteLixo(dadosDescarte: any){
    this.objetoDescarteLixo.navioDescarte = this.navio;
    const tamanho = this.arquivoUpload.length;

    this.descarteLixoService.criarDescarteLixo(this.objetoDescarteLixo).subscribe( descarteLixoDados => {
      if (tamanho > 0){
        for( var i = 0; i < tamanho; i++){
          let listarArquivos = new FormData();
          listarArquivos.append("recibo", this.arquivoUpload[i]);
          this.descarteLixoService.salvarReciboAcidente(listarArquivos).subscribe( informacao => {
            console.log("Salvo!");
          })
        }
      }

      alert("Salvo com Sucesso!")
      this.arquivoUpload = []
      dadosDescarte.reset()
      this.clear()

    }), error => {
      alert("Erro ao cadastrar descarte de Lixo!")
    }
  }

  uploadReciboDescarte(event){
    if(event.target.files && event.target.files[0]){
      this.arquivoUpload = event.target.files;
    }
  }

  clear(){
    (<HTMLInputElement>document.getElementById("arquivoRecibo")).value = null
  }
}
