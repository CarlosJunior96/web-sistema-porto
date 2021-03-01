import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {EstoqueAgua} from '../../models/estoque/estoque-agua';
import {EstoqueOleo} from '../../models/estoque/estoque-oleo';
import {EstoqueCombustivel} from '../../models/estoque/estoque-combustivel';
import {Navio} from '../../models/navio';
import {InicioService} from '../../services/inicio.service';
import {EstoqueNavioService} from '../../services/estoque-navio.service';

@Component({
  selector: 'app-cadastrar-estoque',
  templateUrl: './cadastrar-estoque.component.html',
  styleUrls: ['./cadastrar-estoque.component.css']
})
export class CadastrarEstoqueComponent implements OnInit {

  estoqueNavioForm: FormGroup;
  estoqueAgua: EstoqueAgua;
  estoqueOleo: EstoqueOleo;
  estoqueCombustivel: EstoqueCombustivel;

  constructor(
    private estoqueNavioService: EstoqueNavioService,
    private inicioService: InicioService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("navioImo") === null){
      this.rotas.navigate([("cadastrar-navio")])
    }
    else{
      this.estoqueAgua = new EstoqueAgua();
      this.estoqueOleo = new EstoqueOleo();
      this.estoqueCombustivel = new EstoqueCombustivel();

      this.estoqueNavioForm = new FormGroup( {
        estoqueAgua: new FormControl(""),
        dataAgua: new FormControl(""),
        estoqueOleo: new FormControl(""),
        dataOleo: new FormControl(""),
        estoqueCombustivel: new FormControl(""),
        dataCombustivel: new FormControl("")
      })
    }
  }

  criarEstoqueNavio(){
    let dadosEstoque = this.estoqueNavioForm.value

    /** atribuindo dados ao obj estoque oleo navio **/
    this.estoqueOleo.dataEstoque = dadosEstoque.dataOleo
    this.estoqueOleo.estoqueOleo = dadosEstoque.estoqueOleo

    /** atribuindo dados ao obj estoque agua navio **/
    this.estoqueAgua.dataEstoque = dadosEstoque.dataAgua
    this.estoqueAgua.estoqueAgua = dadosEstoque.estoqueAgua

    /** atribuindo dados ao obj estoque combustivel navio **/
    this.estoqueCombustivel.dataEstoque = dadosEstoque.dataCombustivel
    this.estoqueCombustivel.estoqueCombustivel = dadosEstoque.estoqueCombustivel

    this.inicioService.procurarNavioImo(sessionStorage.getItem("navioImo")).subscribe( navioDados => {

      this.estoqueAgua.navioEstoque = navioDados;
      this.estoqueCombustivel.navioEstoqueCombustivel = navioDados;
      this.estoqueOleo.navioEstoqueOleo = navioDados;

      this.estoqueNavioService.cadastrarEstoqueAguaNavio(this.estoqueAgua).subscribe( dadosAgua => {
        let estoqueAguaSalvo = dadosAgua;
      }, error => {
        alert("Erro ao salvar estoque de agua do navio " + error.info);
      })

      this.estoqueNavioService.cadastrarEstoqueCombustivelNavio(this.estoqueCombustivel).subscribe( dadosCombustivel => {
        let combustivelSalvo = dadosCombustivel;
      }, error => {
        alert("Erro ao salvar estoque de combustível" + error.info);
      })

      this.estoqueNavioService.cadastrarEstoqueOleoNavio(this.estoqueOleo).subscribe( dadosOleo => {
        let oleoSalvo = dadosOleo;
      }, error => {
        alert("Erro ao salvar estoque de óleo" + error.info);
      })

      alert("Salvo com Sucesso!")

    }, error => {
      alert("Erro ao salvar estoque" + error.info)
    })

  }

}
