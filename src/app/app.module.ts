import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OurTeamModule } from "./our-team/our-team.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OurTeamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
