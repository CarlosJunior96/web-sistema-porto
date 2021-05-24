import {Navio} from './navio';

export class Rancho {
  Id: number;
  diaRecebimento: Date;
  tipoPedido: string;
  nfAlimentos: number;
  nfOutros: number;
  valorTotal: number;
  navioRancho: Navio;

  constructor() {
    this.nfOutros = 0;
    this.nfAlimentos = 0;
  }
}
