import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { CaixaDeTextoComponent } from './caixa-de-texto/caixa-de-texto.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ClickMeComponent,
    CaixaDeTextoComponent,
    TooltipExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
