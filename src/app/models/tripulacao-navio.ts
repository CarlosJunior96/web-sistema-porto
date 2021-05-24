import {Navio} from './navio';

export class TripulacaoNavio {
  id: number;
  nome: string;
  matricula: string;
  funcao: string;
  turma: string;
  salario: number;
  encargos: number;
  custoMensal: number;
  navioTripulacao: Navio;

  constructor() {
    this.encargos = 0
  }
}
