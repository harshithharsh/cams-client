import { ApplicationModule, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklycontributionsComponent } from './weeklycontributions.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from 'src/app/app.module';
import { ReactiveFormsModule } from '@angular/forms';

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
  imports: [RouterModule.forChild(routes),
    BrowserModule,
    FormModule,
    HttpClientModule,AppModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class WeeklyRoutingModule { }
