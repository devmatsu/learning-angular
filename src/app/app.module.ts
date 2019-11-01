import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ToastrModule } from 'ngx-toastr';

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
import { DashboardComponent } from './paginas/restrito/dashboard/dashboard.component';
import { TokenApiService } from './interceptadores/token-api.service';
import { InvalidTokenApiService } from './interceptadores/invalid-token-api.service';
import { environment } from '../environments/environment';


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
    CadastroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(environment.toastConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenApiService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
