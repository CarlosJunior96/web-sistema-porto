import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup} from '@angular/forms';
import {DespesaNavio} from '../../models/despesa-navio';
import {Navio} from '../../models/navio';
import {InicioService} from '../../services/inicio.service';
import {Router} from '@angular/router';
import {DespesaPortuariaService} from '../../services/despesa-portuaria.service';

@Component({
  selector: 'app-despesa-portuaria-navio',
  templateUrl: './despesa-portuaria-navio.component.html',
  styleUrls: ['./despesa-portuaria-navio.component.css']
})
export class DespesaPortuariaNavioComponent implements OnInit {

  objetoDespesa: DespesaNavio;

  listaServicos: any = [
    {tipo: "Praticagem"},
    {tipo: "Anvisa"},
    {tipo: "Coleta de Lixo"},
    {tipo: "Lancha de Transporte"},
    {tipo: "Agência"}
  ];
  navio: Navio;

  constructor(
    private inicioService: InicioService,
    private despesaPortuariaService: DespesaPortuariaService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.objetoDespesa = new DespesaNavio()

    if (sessionStorage.getItem("imo")){
      this.inicioService.procurarNavioImo(sessionStorage.getItem("imo")).subscribe( navioBanco => {
        this.navio = navioBanco;
      })
    }
    else {
      this.rotas.navigate([('home')])
    }

  }

  criarDespesaNavio(dadosDespesa: any){
    this.objetoDespesa.navioDespesas = this.navio;
    this.despesaPortuariaService.criarDespesasPortuariaNavio(this.objetoDespesa).subscribe( despesasDados => {
      alert("Salvo com Sucesso!");
      dadosDespesa.reset();
    })
    dadosDespesa.reset()
  }

  formatarNumero(){
    let valor = Number((<HTMLInputElement>document.activeElement).value);
    let contador = (<HTMLInputElement>document.activeElement).selectionStart;
    (<HTMLInputElement>document.activeElement).value = valor.toFixed(2);
    (<HTMLInputElement>document.activeElement).selectionStart = contador;
    (<HTMLInputElement>document.activeElement).selectionEnd = contador;
  }
}
