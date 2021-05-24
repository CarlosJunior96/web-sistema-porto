import {Navio} from './navio';

export class AguaNavio {
  id: number;
  diaDoConsumo: Date;
  consumoNoDia: number;
  aguaRecebidaNoDia: number;
  aguaFornecidaNoDia: number;
  navioAgua: Navio;
  imoNavio: number;

  constructor() {
    this.aguaFornecidaNoDia = 0.00;
    this.aguaRecebidaNoDia = 0.00;
  }
}
