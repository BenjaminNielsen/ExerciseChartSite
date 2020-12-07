import {Component, Input, OnChanges, AfterViewInit, SimpleChanges} from '@angular/core'
import {ExerciseCalculationServiceService} from '../../services/exercise/exercise-calculation-service.service'
import {MuscleSeries} from '../../domain/chart/MuscleSeries'
import {MuscleDataPoint} from '../../domain/chart/MuscleDataPoint'
import {DateTime} from 'luxon'
import {APIService, GetMuscleExerciseQuery, ListMuscleExercisesQuery} from '../../../API.service'

@Component({
  selector: 'app-ngx-muscle-exercise-chart',
  templateUrl: './ngx-muscle-exercise-chart.component.html',
  styleUrls: ['./ngx-muscle-exercise-chart.component.css']
})
export class NgxMuscleExerciseChartComponent implements OnChanges, AfterViewInit {

  @Input() exerciseName: string

  // options
  legend = false
  showLabels = true
  animations = true
  xAxis = true
  yAxis = true
  showYAxisLabel = window.innerWidth > 500
  showXAxisLabel = true
  xAxisLabel = 'Date'
  yAxisLabel = 'Weight'
  timeline = false
  public options = {topWeight: true, OneRepMax: true, totalVolume: false}

  private weightUnit: string
  private exercisesArray: { date: DateTime, exerciseSets: GetMuscleExerciseQuery[] }[]
  public chartData: Array<MuscleSeries>
  public loading = true

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  }

  constructor(public calculator: ExerciseCalculationServiceService,
              public workoutApi: APIService) { }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (!simpleChanges.exerciseName.firstChange) {
      this.makeDatabaseCallAndGenerateChart()
    }
  }

  ngAfterViewInit(): void {
    this.makeDatabaseCallAndGenerateChart()
  }

  makeDatabaseCallAndGenerateChart(): void {
    this.loading = true
    this.workoutApi.MuscleExercisesByName(this.exerciseName).then((event: ListMuscleExercisesQuery) => {
      const exercisesList = event.items
      this.weightUnit = exercisesList[0].weightUnit

      this.exercisesArray = exercisesList.reduce((workoutArray, muscleExercise) => {
        const exerciseDate: DateTime = DateTime.fromISO(muscleExercise.exerciseDate)
        const foundWorkout = workoutArray.find((workout) => +workout.date === +exerciseDate)
        if (foundWorkout){
          foundWorkout.exerciseSets.push(muscleExercise)
        } else {
          workoutArray.push({date: exerciseDate, exerciseSets: [muscleExercise]})
        }
        return workoutArray
      }, []).sort((a, b) => +a.date - +b.date)

      this.generateChart()
      this.loading = false
    })
  }

  getSeriesData(seriesPredicate: (exercises: GetMuscleExerciseQuery[]) => number, name: string): MuscleSeries {
    const exerciseData: Array<MuscleDataPoint> = this.exercisesArray.map(workout => {
      return new MuscleDataPoint(workout.date.toJSDate(), seriesPredicate(workout.exerciseSets))
    })

    return {name, series: exerciseData}
  }

  generateChart(): void {
    const newChartData: Array<MuscleSeries> = []

    if (this.options.topWeight) {
      newChartData.push(this.getSeriesData((e: GetMuscleExerciseQuery[]) => this.calculator.getHighestWeight(e), 'Highest Weight'))
    }
    if (this.options.OneRepMax) {
      newChartData.push(this.getSeriesData((e: GetMuscleExerciseQuery[]) => this.calculator.getHighest1RM(e), 'One Rep Max'))
    }
    if (this.options.totalVolume) {
      newChartData.push(this.getSeriesData((e: GetMuscleExerciseQuery[]) => this.calculator.getHighestVolume(e), 'Highest Volume/Set'))
    }
    this.chartData = newChartData
  }

  onToggleChange(): void {
    this.generateChart()
  }

}
