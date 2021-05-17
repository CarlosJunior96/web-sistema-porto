import {InspecoesNavio} from './inspecoes-navio';

export class Pendencias {
  pendencia: string;
  id: number;
  categoria: string;
  prazo: Date;
  acaoCorretiva: string;
  status: string;
  inspecaoNavio: InspecoesNavio;
}
