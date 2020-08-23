import {Component, Input, OnInit} from '@angular/core'
import {Exercise} from '../../../domain/exercise/exercise'
import { Chart } from 'chart.js'

@Component({
  selector: 'app-muscle-exercise-chart',
  templateUrl: './muscle-exercise-chart.component.html',
  styleUrls: ['./muscle-exercise-chart.component.css']
})
export class MuscleExerciseChartComponent implements OnInit {

  @Input() exerciseName: string
  @Input() exercisesMap: Map<Date, Exercise[]>

  public lineChart: Chart

  constructor() { }

  ngOnInit(): void {
  }

  setupChart(): void {
    this.lineChart = new Chart('canvas', {
      type: 'line',
      label: 'Total Sets per workout',
      data: {
        labels: ['poop', 'goop', 'snoop'],
        datasets: [
          {
            data: [1, 3, 2],
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
              labelString: '# of Sets'
            },
          }],
        }
      }
    })
  }

}
