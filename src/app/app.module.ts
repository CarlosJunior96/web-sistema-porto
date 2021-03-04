import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** IMPORTACAO PARA USO DO FORMS DO ANGULAR E SER POSSÍVEL TRABALHAR DE FORMA DINAMICA **/
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/** IMPORTANDO CLASSES RESPONSAVEIS PARA FAZER AS ROTAS **/
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ConsumoAguaComponent } from './consumo-agua/consumo-agua.component';
import { ConsumoOleoComponent } from './consumo-oleo/consumo-oleo.component';
import { ConsumoCombustivelComponent } from './consumo-combustivel/consumo-combustivel.component';
import { ResiduoOrganicoMarComponent } from './residuo-organico-mar/residuo-organico-mar.component';
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
import { CadastrarEstoqueComponent } from './navio/cadastrar-estoque/cadastrar-estoque.component';
import { RanchoNavioComponent } from './rancho-navio/rancho-navio.component';
import { DescarteLixoNavioComponent } from './descarte-lixo-navio/descarte-lixo-navio.component';

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
  {path: "home", component: InicioComponent},
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
    DescarteLixoNavioComponent
  ],
  imports: [
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
    RouterModule.forRoot(rotasApp, {enableTracing: true})  /** importando o modulo de rotas, passando o vetor de rotas como parametro e ativando o registro de eventos **/
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: "pt-br"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
