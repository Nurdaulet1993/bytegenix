import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurTeamComponent } from './our-team.component';

@NgModule({
  declarations: [
    OurTeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OurTeamComponent
  ]
})
export class OurTeamModule { }
