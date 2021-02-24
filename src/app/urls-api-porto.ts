export class UrlsApiPorto {

  public static get urlBaseServidor(): string{
    return "http://localhost:8080/sistema-porto"
  }

  public static get urlBaseAguaNavio(): string{
    return this.urlBaseServidor + "/consumo-agua"
  }

  public static get urlBaseNavios(): string{
    return this.urlBaseServidor + "/navios"
  }

  public static get urlCadastrarNavio(): string{
    return this.urlBaseNavios + "/"
  }

}
