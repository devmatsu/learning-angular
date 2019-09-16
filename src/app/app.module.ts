import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { CaixaDeTextoComponent } from './caixa-de-texto/caixa-de-texto.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { CabecalhoComponent } from './compartilhado/cabecalho/cabecalho.component';
import { BemVindoComponent } from './paginas/publico/bem-vindo/bem-vindo.component';
import { LoginComponent } from './paginas/publico/login/login.component';
import { CadastroComponent } from './paginas/publico/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ClickMeComponent,
    CaixaDeTextoComponent,
    TooltipExampleComponent,
    CabecalhoComponent,
    BemVindoComponent,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
