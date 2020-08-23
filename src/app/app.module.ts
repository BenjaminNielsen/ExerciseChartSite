import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ChartDashboardComponent } from './components/chart/chart-dashboard.component'
import {HttpClientModule} from '@angular/common/http'
import { MuscleExerciseChartComponent } from './components/chart/muscle-exercise-chart/muscle-exercise-chart.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ChartDashboardComponent,
    MuscleExerciseChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
