import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CodeItemCardComponent } from './code-item-card/code-item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CodeItemCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
