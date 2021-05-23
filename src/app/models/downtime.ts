import {Navio} from './navio';

export class Downtime {
  id: number;
  dataInicio: Date;
  dataTermino: Date;
  horaInicio: any;
  horaTermino: any;
  descricaoDefeito: string;
  navio: Navio;
}
