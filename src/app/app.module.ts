import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ChartDashboardComponent } from './components/chart/chart-dashboard.component'
import {HttpClientModule} from '@angular/common/http'
import { MuscleExerciseChartComponent } from './components/chart/muscle-exercise-chart/muscle-exercise-chart.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ChartsModule} from 'ng2-charts'
import { ClarityModule } from '@clr/angular'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { GraphApiTestComponent } from './components/graph-api-test/graph-api-test.component'

@NgModule({
  declarations: [
    AppComponent,
    ChartDashboardComponent,
    MuscleExerciseChartComponent,
    GraphApiTestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
