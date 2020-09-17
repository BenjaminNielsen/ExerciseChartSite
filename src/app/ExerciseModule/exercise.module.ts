import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ChartsModule} from 'ng2-charts'
import {ClarityModule} from '@clr/angular'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppComponent} from '../app.component'
import {ExerciseMainComponent} from './components/exercise-main.component'
import {MuscleExerciseChartComponent} from './components/muscle-exercise-chart/muscle-exercise-chart.component'
import {AppRoutingModule} from '../app-routing.module'
import { ExerciseContentComponent } from './components/exercise-content/exercise-content.component'

@NgModule({
  declarations: [
    AppComponent,
    ExerciseMainComponent,
    MuscleExerciseChartComponent,
    ExerciseContentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class ExerciseModule { }
