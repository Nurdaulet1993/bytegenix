import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OurTeamModule } from "./our-team/our-team.module";
import { ReasonsModule } from "./reasons/reasons.module";
import { OurServicesModule } from "./our-services/our-services.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OurTeamModule,
    ReasonsModule,
    OurServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
