export class UrlsApiPorto {

  public static get urlBaseServidor(): string{
    return "http://localhost:8080/sistema-porto";
  }

  public static get urlBaseNavios(): string{
    return this.urlBaseServidor + "/navios";
  }

  public static get urlFindAllNavios(): string{
    return this.urlBaseNavios + "/";
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

  /** RANCHO NAVIO **/
  public static get urlBaseRanchoNavio(): string{
    return this.urlBaseServidor + "/rancho-navio";
  }

  public static get urlCadastrarRanchoNavio(): string{
    return this.urlBaseRanchoNavio + "/";
  }

  public static get urlUploadReciboRancho(): string{
    return this.urlBaseRanchoNavio + "/salvar-recibo";
  }

  /** DESCARTE LIXO NAVIO **/
  public static get urlBaseDescarteLixoNavio(): string{
    return this.urlBaseServidor + "/descarte-lixo-navio";
  }

  public static get urlCadastrarDescarteLixo(): string{
    return this.urlBaseDescarteLixoNavio + "/"
  }

  public static get urlUploadReciboDescarte(): string{
    return this.urlBaseDescarteLixoNavio + "/salvar-recibo-descarte"
  }

  /** DESPESAS PORTUÁRIAS NAVIO **/
  public static get urlBaseDespesaPortuariasNavio(): string{
    return this.urlBaseServidor + "/despesas-portuarias-navio"
  }

  public static get urlCadastrarDespesaPortuaria(): string{
    return this.urlBaseDespesaPortuariasNavio + "/"
  }

  /** NAVIO ACIDENTES **/
  public static get urlBaseAcidentesNavio(): string{
    return this.urlBaseServidor + "/acidentes-navio";
  }

  public static get urlCadastrarAcidentesNavio(): string{
    return this.urlBaseAcidentesNavio + "/"
  }

  public static get urlUploadArquivoAcidente(): string{
    return this.urlBaseAcidentesNavio + "/salvar-arquivo"
  }

  /** TRIPULACAO NAVIO **/
  public static get urlBaseTripulacaoNavio(): string{
    return this.urlBaseServidor + "/tripulacao-navio"
  }

  public static get urlCadastrarTripulacao(): string{
    return this.urlCadastrarTripulacao + "/"
  }

  /** SALVAR INSPECAO NAVIO **/
  public static get urlBaseInspecaoNavio(): string{
    return this.urlBaseServidor + "/inspecao-navio"
  }

  public static get urlCriarInspecaoNavio(): string{
    return this.urlBaseInspecaoNavio + "/"
  }

  /** SALVAR LISTA DE PENDENCIAS **/
  public static get urlSalvarListaPendencias(): string{
    return this.urlBaseInspecaoNavio + "/pendencias/"
  }

}
