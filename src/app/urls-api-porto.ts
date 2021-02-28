export class UrlsApiPorto {

  public static get urlBaseServidor(): string{
    return "http://localhost:8080/sistema-porto";
  }

  public static get urlBaseNavios(): string{
    return this.urlBaseServidor + "/navios";
  }

  public static get urlCadastrarNavio(): string{
    return this.urlBaseNavios + "/";
  }

  public static get urlFindNavioIMO(): string{
    return this.urlBaseNavios + "/imo/";
  }

  /** urls do consumo-agua-navio **/
  public static get urlBaseAguaNavio(): string{
    return this.urlBaseServidor + "/consumo-agua";
  }

  /** urls do consumo-combustivel-navio **/
  public static get urlBaseConsumoCombustivelNavio(): string{
    return this.urlBaseServidor + "/consumo-combustivel";
  }

  public static get urlConsumoCombustivelNavioCadastrar(): string{
    return this.urlBaseConsumoCombustivelNavio + "/";
  }

  /** urls do consumo-oleo-lubrificante-navio **/
  public static get urlBaseConsumoOleoLubrificanteNavio(): string{
    return this.urlBaseServidor + "/consumo-oleo";
  }

  public static get urlConsumoOleoLubriricanteCadastrar(): string{
    return this.urlBaseConsumoOleoLubrificanteNavio + "/";
  }

  /** urls do descarte de residuo-organico-ao-mar **/
  public static get urlBaseResiduoOrganicoMar(): string{
    return this.urlBaseServidor + "/residuo-organico";
  }

  public static get urlResiduoOrganicoCadastrar(): string{
    return this.urlBaseResiduoOrganicoMar + "/";
  }

  /** urls para cadastrar estoques do navio **/

  public static get urlCadastrarEstoqueAguaNavio(): string{
    return this.urlBaseNavios + "/estoque-agua";
  }

  public static get urlCadastrarEstoqueCombustivelNavio(): string{
    return this.urlBaseNavios + "/estoque-combustivel";
  }

  public static get urlCadastrarEstoqueOleoNavio(): string{
    return this.urlBaseNavios + "/estoque-oleo";
  }
}
