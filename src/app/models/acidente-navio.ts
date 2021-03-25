import {Navio} from './navio';

export class AcidenteNavio {
  id: number;
  diaAcidente: Date;
  tipoEvento: string;
  afastamento: string;
  downtime: string;
  navioAcidente: Navio;
}
