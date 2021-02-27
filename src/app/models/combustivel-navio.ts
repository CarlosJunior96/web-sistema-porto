import {Navio} from './navio';

export class CombustivelNavio {
  id: number;
  tipo: string;
  diaDoConsumo: Date;
  imoNavio: number;
  consumoNoDia: number;
  combustivelRecebidoDia: number;
  combustivelFornecidoDia: number;
  navioCombustivel: Navio;
}
