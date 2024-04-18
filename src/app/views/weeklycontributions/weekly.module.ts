import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeeklyRoutingModule } from './weekly-routing.module';
import { WeeklycontributionsComponent } from './weeklycontributions.component';

@NgModule({
  declarations: [
    WeeklycontributionsComponent
  ],
  imports: [
    CommonModule,
    WeeklyRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class WeeklyModule { }
 