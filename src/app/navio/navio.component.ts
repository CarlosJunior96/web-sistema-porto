import { Component, OnInit } from '@angular/core';
import {Navio} from '../models/navio';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NavioService} from '../services/navio.service';
import {InicioService} from '../services/inicio.service';

@Component({
  selector: 'app-navio',
  templateUrl: './navio.component.html',
  styleUrls: ['./navio.component.css']
})
export class NavioComponent implements OnInit {

  navio: Navio;
  navioReceberForm: FormGroup;

  constructor(
    private inicioService: InicioService,
    private rotas: Router,
    private navioService: NavioService
  ) { }

  ngOnInit(): void {
    this.navio = new Navio();

    if (sessionStorage.getItem("imo")){
     this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioDados => {
       this.navio = navioDados;
       this.navio.anoConstrucao = new Date (this.navio.anoConstrucao);
       this.navio.proximaDocagem = new Date(this.navio.proximaDocagem);

       sessionStorage.setItem("imo", null);
     })
    }
  }

  criarNavio(navioForm: any){

    if (this.navio.id != null){
      this.navioService.atualizarNavio(this.navio.id, this.navio).subscribe();
      alert("Salvo com Sucesso!");
      this.rotas.navigate([("navio-admin")])
    }

    else {
      this.navioService.cadastrarNavio(this.navio).subscribe( navioDados => {
        let navioImo = navioDados.imo;
        sessionStorage.setItem("navioImo", navioImo);
        this.rotas.navigate([("estoque-navio-cadastrar")])
      }, error => {
        alert("Erro ao vincular Navio.")
      } )
    }
  }

  formatarNumero(){
    let valor = Number((<HTMLInputElement>document.activeElement).value);
    let contador = (<HTMLInputElement>document.activeElement).selectionStart;
    (<HTMLInputElement>document.activeElement).value = valor.toFixed(2);
    (<HTMLInputElement>document.activeElement).selectionStart = contador;
    (<HTMLInputElement>document.activeElement).selectionEnd = contador;
  }

}
