import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** IMPORTACAO PARA USO DO FORMS DO ANGULAR E SER POSSÍVEL TRABALHAR DE FORMA DINAMICA **/
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/** IMPORTANDO CLASSES RESPONSAVEIS PARA FAZER AS ROTAS **/
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ConsumoAguaComponent } from './sistema-cliente/consumo-agua/consumo-agua.component';
import { ConsumoOleoComponent } from './sistema-cliente/consumo-oleo/consumo-oleo.component';
import { ConsumoCombustivelComponent } from './sistema-cliente/consumo-combustivel/consumo-combustivel.component';
import { ResiduoOrganicoMarComponent } from './sistema-cliente/residuo-organico-mar/residuo-organico-mar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import {HttpClientModule} from '@angular/common/http';
import { NavioComponent } from './navio/navio.component';

/** material **/
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TemplateMenuComponent } from './template-menu/template-menu.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {HammerModule} from '@angular/platform-browser';
import {MaterialFileInputModule} from 'ngx-material-file-input';

import { CadastrarEstoqueComponent } from './navio/cadastrar-estoque/cadastrar-estoque.component';
import { RanchoNavioComponent } from './sistema-cliente/rancho-navio/rancho-navio.component';
import { DescarteLixoNavioComponent } from './sistema-cliente/descarte-lixo-navio/descarte-lixo-navio.component';
import { DespesaPortuariaNavioComponent } from './sistema-cliente/despesa-portuaria-navio/despesa-portuaria-navio.component';
import { AcidenteNavioComponent } from './sistema-cliente/acidente-navio/acidente-navio.component';
import { TripulacaoNavioComponent } from './sistema-cliente/tripulacao-navio/tripulacao-navio.component';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import { InspecoesNavioComponent } from './sistema-cliente/inspecoes-navio/inspecoes-navio.component';
import { HistoricoCadastroComponent } from './sistema-cliente/historico-cadastro/historico-cadastro.component';
import {NgxMaskModule} from 'ngx-mask';
import { DowntimeNavioComponent } from './sistema-cliente/downtime-navio/downtime-navio.component';
import { TemplateAdminComponent } from './sistema-admin/template-admin/template-admin.component';
import { NavioAdminComponent } from './sistema-admin/navio-admin/navio-admin.component';
import { EstoqueNavioAdminComponent } from './sistema-admin/estoque-navio-admin/estoque-navio-admin.component';
import { ListaEstoqueNavioComponent } from './sistema-admin/estoque-navio-admin/lista-estoque-navio/lista-estoque-navio.component';

/** VETOR QUE RECEBE AS ROTAS QUE O SISTEMA TERÁ **/
export const rotasApp: Routes = [
  {path: "agua-navio", component: ConsumoAguaComponent},
  {path: "combustivel-navio", component: ConsumoCombustivelComponent},
  {path: "oleo-lubrificante-navio", component: ConsumoOleoComponent},
  {path: "residuo-organico-navio", component: ResiduoOrganicoMarComponent},
  {path: "estoque-navio-cadastrar", component: CadastrarEstoqueComponent},
  {path: "cadastrar-navio", component: NavioComponent},
  {path: "cadastrar-rancho", component: RanchoNavioComponent},
  {path: "cadastrar-descarte-lixo", component: DescarteLixoNavioComponent},
  {path: "despesa-portuaria-navio", component: DespesaPortuariaNavioComponent},
  {path: "cadastrar-acidentes", component: AcidenteNavioComponent},
  {path: "cadastrar-tripulacao", component: TripulacaoNavioComponent},
  {path: "cadastrar-inspecao", component: InspecoesNavioComponent},
  {path: "historico-informacoes", component: HistoricoCadastroComponent},
  {path: "cadastrar-downtime", component: DowntimeNavioComponent},
  {path: "home", component: InicioComponent},
  {path: "estoque-navio-admin", component: EstoqueNavioAdminComponent},
  {path: "lista-estoque-navio", component: ListaEstoqueNavioComponent},
  {path: "navio-admin", component: NavioAdminComponent},

  {path: "", component: InicioComponent}, /** se tiver apenas o url geral será redirecionado para o inicio **/
  {path: "**", component: PaginaNaoEncontradaComponent} /** se não existir nenhum dos endereços informados vai pra essa pagina**/
]

@NgModule({
  declarations: [
    AppComponent,
    ConsumoAguaComponent,
    ConsumoOleoComponent,
    ConsumoCombustivelComponent,
    ResiduoOrganicoMarComponent,
    InicioComponent,
    PaginaNaoEncontradaComponent,
    NavioComponent,
    TemplateMenuComponent,
    CadastrarEstoqueComponent,
    RanchoNavioComponent,
    DescarteLixoNavioComponent,
    DespesaPortuariaNavioComponent,
    AcidenteNavioComponent,
    TripulacaoNavioComponent,
    InspecoesNavioComponent,
    HistoricoCadastroComponent,
    DowntimeNavioComponent,
    TemplateAdminComponent,
    NavioAdminComponent,
    EstoqueNavioAdminComponent,
    ListaEstoqueNavioComponent
  ],
  imports: [
    AngularFileUploaderModule,
    HammerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatIconModule,
    MatDatepickerModule,
    MatSliderModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    RouterModule.forRoot(rotasApp, {enableTracing: true}),
    NgxMaskModule,
    /** importando o modulo de rotas, passando o vetor de rotas como parametro e ativando o registro de eventos **/
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: "pt-br"}
  ],
  bootstrap: [AppComponent]


})

export class AppModule {

}
