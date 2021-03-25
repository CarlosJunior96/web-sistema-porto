import {Navio} from './navio';

export class DescarteLixo {
  id: number;
  diaDescarte: Date;
  categoria: string;
  volume: number;
  local: string;
  empresaColetora: string;
  navioDescarte: Navio;
}
