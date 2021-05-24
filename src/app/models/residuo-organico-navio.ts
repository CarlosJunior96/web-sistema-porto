import {Navio} from './navio';

export class ResiduoOrganicoNavio {
  id: number;
  diaDescarteResiduo: Date;
  latitude: string;
  longitude: string;
  quantidade: number;
  navioResiduo: Navio;
  imoNavio: number;

  constructor() {
    this.longitude = "";
    this.latitude = "";
  }

}
