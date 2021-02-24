import { Component, OnInit } from '@angular/core';
import {Navio} from '../models/navio';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NavioService} from '../services/navio.service';

@Component({
  selector: 'app-navio',
  templateUrl: './navio.component.html',
  styleUrls: ['./navio.component.css']
})
export class NavioComponent implements OnInit {

  navio: Navio;
  navioReceberForm: FormGroup;

  constructor(
    private rotas: Router,
    private navioService: NavioService
  ) { }

  ngOnInit(): void {
    this.navio= new Navio();

    this.navioReceberForm = new FormGroup({
      nomeNavio: new FormControl(""),
      tonelagemNavio: new FormControl(""),
      classeDp: new FormControl(""),
      dataInformar: new FormControl(""),
      propulsaoNavio: new FormControl(""),
      comprimentoNavio: new FormControl(""),
      bocaNavio: new FormControl(""),
      caladoNavio: new FormControl(""),
      areaLivreConves: new FormControl(""),
      bollardPull: new FormControl(""),
      imoNavio: new FormControl(""),
      callSign: new FormControl(""),
      anoConstrucao: new FormControl(""),
      docagemNavio: new FormControl("")

    })
  }

  criarNavio(){
    let formNavio = this.navioReceberForm.value;
    this.atribuirFormModelNavio(formNavio);
    this.navioService.cadastrarNavio(this.navio).subscribe(dados =>{
      let navio = dados;
      alert("Navio Criado com Sucesso!")
    }, error => {
      alert("Error ao cadastrar Navio." + error)
    })

  }

  atribuirFormModelNavio(formNavio){
    this.navio.nome = formNavio.nomeNavio;
    this.navio.tonelagem = formNavio.tonelagemNavio;
    this.navio.classeDp = formNavio.classeDp;
    this.navio.areaLivreConves = formNavio.areaLivreConves;
    this.navio.propulsao = formNavio.propulsaoNavio;
    this.navio.comprimento = formNavio.comprimentoNavio;
    this.navio.boca = formNavio.bocaNavio;
    this.navio.anoConstrucao = new Date(formNavio.anoConstrucao);
    this.navio.proximaDocagem = new Date(formNavio.docagemNavio);
    this.navio.calado = formNavio.caladoNavio;
    this.navio.callSign = formNavio.callSign;
    this.navio.bollardPull = formNavio.bollardPull;
    this.navio.imo = formNavio.imoNavio;
  }

}
