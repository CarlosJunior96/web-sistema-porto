import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';
import {Rancho} from '../models/rancho';
import {InicioService} from '../services/inicio.service';
import {Navio} from '../models/navio';
import {Router} from '@angular/router';
import {RanchoService} from '../services/rancho.service';
import {log} from 'util';

@Component({
  selector: 'app-rancho-navio',
  templateUrl: './rancho-navio.component.html',
  styleUrls: ['./rancho-navio.component.css']
})
export class RanchoNavioComponent implements OnInit {

  objetoRancho: Rancho;
  srcResult: any;
  arquivoUpload: any;
  navio: Navio;
  reciboData: FormData;

  tipoPedido: any = [
    {tipo: "Completo"},
    {tipo: "Complemento"}
  ];

  constructor(
    private inicioService: InicioService,
    private rotas: Router,
    private ranchoService: RanchoService
  ) { }

  ngOnInit(): void {
    this.objetoRancho = new Rancho();
    this.navio = new Navio();

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }

    else {
      this.rotas.navigate([('home')])
    }
  }

  criarRanchoNavio(dadosRancho: any){
    this.objetoRancho.navioRancho = this.navio;
    const tamanho = this.arquivoUpload.length


    this.ranchoService.criarRanchoNavio(this.objetoRancho).subscribe( objetoSalvo => {
      for (var i = 0; i < tamanho; i++){
        let listaArquivos = new FormData();
        listaArquivos.append("recibo", this.arquivoUpload[i]);
        this.ranchoService.salvarRecibo(listaArquivos).subscribe( informacao => {
          console.log("Salvo");
          }
        )
      }
      alert("Salvo com Sucesso!")
      dadosRancho.clear()

    }), error => {
      alert("Erro ao Salvar Rancho!")
    }

  }

  uploadRecibo(event){
    if(event.target.files && event.target.files[0]){
        this.arquivoUpload = event.target.files
      }
  }

}
