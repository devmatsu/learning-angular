import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { CaixaDeTextoComponent } from './caixa-de-texto/caixa-de-texto.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ClickMeComponent,
    CaixaDeTextoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
