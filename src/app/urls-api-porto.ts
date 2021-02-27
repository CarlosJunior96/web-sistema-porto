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
}
