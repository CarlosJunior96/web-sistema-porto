import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Rancho} from '../models/rancho';
import {InicioService} from '../services/inicio.service';
import {Navio} from '../models/navio';
import {Router} from '@angular/router';
import {RanchoService} from '../services/rancho.service';

@Component({
  selector: 'app-rancho-navio',
  templateUrl: './rancho-navio.component.html',
  styleUrls: ['./rancho-navio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RanchoNavioComponent implements OnInit {

  objetoRancho: Rancho;
  srcResult: any;
  arquivoUpload: any;
  navio: Navio;
  reciboData: FormData;
  nfAlimentos: any;
  nfOutros: any;

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
    this.nfAlimentos = 0
    this.nfOutros  = 0
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
      if (tamanho > 0){
        for (var i = 0; i < tamanho; i++){
          let listaArquivos = new FormData();
          listaArquivos.append("recibo", this.arquivoUpload[i]);
          this.ranchoService.salvarRecibo(listaArquivos).subscribe( informacao => {
            }
          )
        }
      }
      alert("Salvo com Sucesso!")
      this.arquivoUpload = []
      dadosRancho.reset()
      this.clear()
      console.log(this.arquivoUpload);
    }), error => {
      alert("Erro ao Salvar Rancho!")
    }

  }

  uploadRecibo(event){
    if(event.target.files && event.target.files[0]){
        this.arquivoUpload = event.target.files
      }
  }

  eventoNFAlimentos(event){
    const aux = event.target.value
    this.nfAlimentos = aux;
    console.info(this.nfAlimentos);
  }

  eventoNFOutros(event){
    const aux = event.target.value
    this.nfOutros = aux;
    console.info(this.nfOutros);
  }

  total(){
    var total = Number(this.nfOutros) + Number (this.nfAlimentos);
    (<HTMLInputElement>document.getElementById("totalnf")).value = String(total)
    this.objetoRancho.valorTotal = total;
  }

  clear(){
    (<HTMLInputElement>document.getElementById("arquivoRecibo")).value = null
  }
}
