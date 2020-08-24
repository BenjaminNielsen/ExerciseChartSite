import {Component, Input, OnInit} from '@angular/core'
import {Exercise} from '../../../domain/exercise/exercise'
import { Chart } from 'chart.js'
import {MuscleExercise} from '../../../domain/exercise/MuscleExercise/muscle-exercise'

@Component({
  selector: 'app-muscle-exercise-chart',
  templateUrl: './muscle-exercise-chart.component.html',
  styleUrls: ['./muscle-exercise-chart.component.css']
})
export class MuscleExerciseChartComponent implements OnInit {

  @Input() exerciseName: string
  @Input() exercisesMap: Map<Date, Exercise[]>
  @Input() identifier: string


  public lineChart: Chart

  private weightUnit: string

  constructor() { }

  ngOnInit(): void {
    console.log(this.exercisesMap)
    console.log(this.exercisesMap.values().next())

    this.weightUnit = this.exercisesMap.values().next().value.weightUnit
    const chartValues = this.getHighestWeightXYValues(this.exercisesMap)
    this.setupChart(chartValues)
  }

  getHighestWeightXYValues(values: Map<Date, Exercise[]>): Map<string, number>{
    const map = new Map<string, number>()
    for (const [key, value] of values){
      map.set(key.toLocaleDateString(), Math.max(...(value.map((exercise) => (exercise as MuscleExercise).weight))))
      console.log('map %o', map)

    }
    return map
  }

  setupChart(chartVals: Map<string, number>): void {
    console.log(this.identifier)
    this.lineChart = new Chart(document.getElementById('canvas'+this.identifier) , {
      type: 'line',
      label: 'Highest Weight In a Single Rep',
      data: {
          labels: Array.from(chartVals.keys()),
        datasets: [
          {
            data: Array.from(chartVals.values()),
            borderColor: '#3cb371',
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Time'
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Weight (' + this.weightUnit + ')'
            },
          }],
        }
      }
    })
  }

}
