import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bot1Component } from './bot1/bot1.component';
import { Bot2Component } from './bot2/bot2.component';
// import { Bot2Component } from './bot2/bot2.component';
// import { Bot3Component } from './bot3/bot3.component';

@NgModule({
  declarations: [
    AppComponent,
    Bot1Component,
    Bot2Component
    // Bot2Component,
    // Bot3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
