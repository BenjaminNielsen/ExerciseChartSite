import { Component, OnInit } from '@angular/core'
import {WorkoutData} from '../../domain/workout/workout-data'
import {WorkoutService} from '../../services/workout/workout.service'


@Component({
  selector: 'app-chart',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css']
})
export class ChartDashboardComponent implements OnInit {

  public workoutData: WorkoutData[]
  public selectedExercise: string

  public lineChart = []
  public dates = []
  public yAxis = []
  public exerciseNames = []
  private chosenExercise: string

  constructor(private workoutService: WorkoutService ) { }
  ngOnInit(): void {
    this.workoutService.getJSON().subscribe(workoutGroup => {
      this.workoutData = workoutGroup

      this.exerciseNames = Array.from( new Set( workoutGroup.map((workout) =>
        Object.keys(workout.exercises)).reduce((prev, curr) =>
          prev.concat(curr)
        ))
      )


      console.log(this.exerciseNames)
      workoutGroup.forEach(workout => {
        console.log(Object.keys(workout.exercises))
        this.dates.push(new Date(workout.workoutDate).toLocaleDateString())
        // exerciseNamesSet.add(Object.keys(workout.exercises))
        console.log(this.exerciseNames)
        const totalSets = Object.values(workout.exercises).reduce(( totals: number, currentVal) => totals + currentVal.length, 0)

        this.yAxis.push(totalSets)
        this.chosenExercise = this.exerciseNames[0]

      })
      // this.exerciseNames = Array.from(exerciseNamesSet)
    })
  }



}
