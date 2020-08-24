import {Component, Input, OnInit} from '@angular/core'
import {Exercise} from '../../../domain/exercise/exercise'
import {ChartDataSets, Chart} from 'chart.js'
import {MuscleExercise} from '../../../domain/exercise/MuscleExercise/muscle-exercise'
import {Color, Label} from 'ng2-charts'

@Component({
  selector: 'app-muscle-exercise-chart',
  templateUrl: './muscle-exercise-chart.component.html',
  styleUrls: ['./muscle-exercise-chart.component.css']
})
export class MuscleExerciseChartComponent implements OnInit {

  @Input() exerciseName: string
  @Input() exercisesMap: Map<Date, Exercise[]>
  @Input() identifier: string

  public lineChartData: ChartDataSets[]
  public lineChartLabels: Label[]
  public lineChartOptions: { responsive: boolean }
  public lineChartColors: Color[]
  public lineChartLegend = true
  public lineChartType: Chart.ChartType = 'line'
  public lineChartPlugins = []

  // public lineChart: Chart

  private weightUnit: string

  constructor() { }

  ngOnInit(): void {
    this.weightUnit = this.exercisesMap.values().next().value.weightUnit
    const chartValues = this.getHighestWeightXYValues(this.exercisesMap)
    this.setupChart(chartValues)
  }

  getHighestWeightXYValues(values: Map<Date, Exercise[]>): Map<string, number>{
    const map = new Map<string, number>()
    for (const [key, value] of values){
      map.set(key.toLocaleDateString(), Math.max(...(value.map((exercise) => (exercise as MuscleExercise).weight))))
    }
    return map
  }

  setupChart(chartVals: Map<string, number>): void {
    this.lineChartData = [ {data: Array.from(chartVals.values()) , label: 'Highest Weight in a Rep'}]
    this.lineChartLabels = Array.from(chartVals.keys())
    this.lineChartOptions = {
      responsive: true,
    }
    this.lineChartColors = [
      {
        borderColor: '#3cb371',
      },
    ]
  }

}
