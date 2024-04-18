import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklycontributionsComponent } from './weeklycontributions.component';

const routes: Routes = [
  {
    path: '',
    component: WeeklycontributionsComponent,
    data: {
      title: $localize`Weekly`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeeklyRoutingModule { }
