import { Component, OnInit } from '@angular/core'
import { Chart } from 'chart.js'
import {WorkoutData} from '../../domain/workout/workout-data'
import {WorkoutService} from '../../services/workout/workout.service'


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private workoutData: WorkoutData[]
  public lineChart = []
  public dates = []
  public yAxis = []
  public exerciseNames = new Set()

  constructor(private workoutService: WorkoutService ) { }

  ngOnInit(): void {
    this.workoutService.getJSON().subscribe(workoutSet => {
      this.workoutData = workoutSet
      workoutSet.forEach(workout => {
        this.dates.push(new Date(workout.workoutDate).toLocaleDateString())
        Object.keys(workout.exercises).forEach(name => this.exerciseNames.add(name))

        const totalSets = Object.values(workout.exercises).reduce(( totals: number, currentVal) => totals + currentVal.length, 0)

        this.yAxis.push(totalSets)

        this.setupChart()
      })
    })
  }

  setupChart(): void {
    this.lineChart = new Chart('canvas', {
      type: 'line',
      label: 'Total Sets per workout',
      data: {
        labels: this.dates,
        datasets: [
          {
            data: this.yAxis,
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
