import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {BrowserModule} from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ClarityModule} from '@clr/angular'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppComponent} from '../app.component'
import {ExerciseMainComponent} from './components/exercise-main.component'
import {AppRoutingModule} from '../app-routing.module'
import { ExerciseContentComponent } from './components/exercise-content/exercise-content.component'
import { SideNavComponent } from './components/side-nav/side-nav.component'
import { NgxMuscleExerciseChartComponent } from './components/ngx-muscle-exercise-chart/ngx-muscle-exercise-chart.component'
import {LineChartModule} from '@swimlane/ngx-charts'
import { NgxChartsModule } from '@swimlane/ngx-charts'

@NgModule({
  declarations: [
    AppComponent,
    ExerciseMainComponent,
    ExerciseContentComponent,
    SideNavComponent,
    NgxMuscleExerciseChartComponent,
  ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ClarityModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        LineChartModule,
        NgxChartsModule
    ]
})
export class ExerciseModule { }
