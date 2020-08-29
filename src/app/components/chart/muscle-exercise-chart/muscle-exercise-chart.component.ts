import {Component, Input, OnInit} from '@angular/core'
import {ChartDataSets, Chart, ChartOptions} from 'chart.js'
import {MuscleExercise} from '../../../domain/exercise/MuscleExercise/muscle-exercise'
import {Color, Label} from 'ng2-charts'
import {MuscleChartPoint} from '../../../domain/chart/MuscleChartPoint'
import {ExerciseCalculationServiceService} from '../../../services/exercise/exercise-calculation-service.service'

@Component({
  selector: 'app-muscle-exercise-chart',
  templateUrl: './muscle-exercise-chart.component.html',
  styleUrls: ['./muscle-exercise-chart.component.css']
})
export class MuscleExerciseChartComponent implements OnInit {

  @Input() exerciseName: string
  @Input() exercisesMap: Map<Date, MuscleExercise[]>
  @Input() identifier: string

  public lineChartData: ChartDataSets[]
  public lineChartLabels: Label[]
  public lineChartOptions: ChartOptions
  public lineChartColors: Color[]
  public lineChartLegend = true
  public lineChartType: Chart.ChartType = 'line'
  public lineChartPlugins = []

  private weightUnit: string

  constructor(public calculator: ExerciseCalculationServiceService) { }

  ngOnInit(): void {
    this.weightUnit = this.exercisesMap.values().next().value.weightUnit
    const topWeightValues = this.getChartPoints(this.exercisesMap, (e) => Math.max(...(e.map((exercise) => (exercise as MuscleExercise).weight))))
    const OneRepMaxValues = this.getChartPoints(this.exercisesMap, (e) => this.calculator.getHighest1RM(e))
    const highestVolumeValues = this.getChartPoints(this.exercisesMap, (e) => e.reduce((prev, curr: MuscleExercise) => curr.weight += prev, 0))

    const dataSets = [{data: topWeightValues, label: 'Highest Weight in a Rep'}, {data: OneRepMaxValues, label: '1RM (Theoretical)'}]
    this.setupChart(dataSets)
  }

  getChartPoints(values: Map<Date, MuscleExercise[]>, predicate: (exercises: MuscleExercise[]) => number): Chart.ChartPoint[]{
    const chartPoints: MuscleChartPoint[] = []
    for (const [key, value] of values){
      chartPoints.push({t: key, y: predicate(value)})
    }
    console.log(chartPoints)
    return chartPoints.sort((a, b) => b.t.valueOf() - a.t.valueOf())
  }

  setupChart(chartVals: any): void {
    this.lineChartData = chartVals
  // this.lineChartLabels = chartVals.map(point => point.x)
    this.lineChartOptions = {
      responsive: true,
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'day'
          },
          distribution: 'linear'
        }]
      }
    }
    this.lineChartColors = [
      {
        borderColor: '#3cb371',
      },
    ]
  }

}
