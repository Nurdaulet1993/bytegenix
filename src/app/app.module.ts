import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OurTeamModule } from "./our-team/our-team.module";
import { ReasonsModule } from "./reasons/reasons.module";
import { OurServicesModule } from "./our-services/our-services.module";
import { HeroModule } from "./hero/hero.module";
import { HeaderModule } from "./header/header.module";

import { AppComponent } from './app.component';
import { FooterModule } from "./footer/footer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OurTeamModule,
    ReasonsModule,
    OurServicesModule,
    HeroModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
