import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {InicioService} from '../services/inicio.service';
import {Router} from '@angular/router';
import {Navio} from '../models/navio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  navioReceber: FormGroup;
  navio: Navio;
  constructor(
    private inicioService: InicioService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.navio = new Navio();
    this.navioReceber = new FormGroup({
      imoNavio: new FormControl("")
    })
  }

  procurarNavio(){
    let imo = this.navioReceber.value
    this.inicioService.procurarNavioImo(imo.imoNavio).subscribe(navioImo => {
      this.navio = navioImo;
      sessionStorage.setItem("imo", imo.imoNavio)

      var b = sessionStorage.getItem("imo")
      this.rotas.navigate([("agua-navio")])
    }, error => {
      alert("Navio Nao encontrado!")
    })
  }

}
