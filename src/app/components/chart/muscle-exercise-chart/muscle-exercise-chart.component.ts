import {Component, Input, OnInit} from '@angular/core'
import {Chart, ChartDataSets, ChartOptions} from 'chart.js'
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

  public lineChartData: ChartDataSets[]
  public lineChartLabels: Label[]
  public lineChartOptions: ChartOptions
  public lineChartColors: Color[]
  public lineChartLegend = true
  public lineChartType: Chart.ChartType = 'line'
  public lineChartPlugins = []
  public options = {topWeight: true, OneRepMax: true, totalVolume: false}

  private weightUnit: string

  constructor(public calculator: ExerciseCalculationServiceService) {
  }

  ngOnInit(): void {
    this.weightUnit = this.exercisesMap.values().next().value.weightUnit
    this.generateChart()
  }

  generateChart(): void {
    const topWeightValues = this.getChartPoints((e) => Math.max(...(e.map((exercise) => (exercise as MuscleExercise).weight))))
    const OneRepMaxValues = this.getChartPoints((e) => this.calculator.getHighest1RM(e))
    const highestVolumeValues = this.getChartPoints((e) => e.reduce((prev, curr: MuscleExercise) => prev += curr.weight, 0))

    const dataSets = []

    if (this.options.topWeight) {
      dataSets.push({data: topWeightValues, label: 'Highest Weight in a Rep'})
    }
    if (this.options.OneRepMax) {
      dataSets.push({data: OneRepMaxValues, label: '1RM (Theoretical)'})
    }
    if (this.options.totalVolume) {
      dataSets.push({data: highestVolumeValues, label: 'Total Volume'})
    }
    this.setupChart(dataSets)
  }

  onChange(): void {
    this.generateChart()
  }

  getChartPoints(predicate: (exercises: MuscleExercise[]) => number): Chart.ChartPoint[] {
    const chartPoints: MuscleChartPoint[] = []
    for (const [key, value] of this.exercisesMap) {
      chartPoints.push({t: key, y: predicate(value)})
    }
    return chartPoints.sort((a, b) => b.t.valueOf() - a.t.valueOf())
  }

  setupChart(chartVals: any): void {
    this.lineChartData = chartVals
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
