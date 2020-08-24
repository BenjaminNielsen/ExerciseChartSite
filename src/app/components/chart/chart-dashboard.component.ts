import { Component, OnInit } from '@angular/core'
import {WorkoutData} from '../../domain/workout/workout-data'
import {WorkoutService} from '../../services/workout/workout.service'
import {DefaultExercises} from '../../domain/constants/defaultExercises'

@Component({
  selector: 'app-chart',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css']
})
export class ChartDashboardComponent implements OnInit {

  public defaultExerciseNames = DefaultExercises.defaultExerciseNames
  public workoutData: WorkoutData[]
  public selectedExercise: string

  public exerciseNames: string[]

  constructor( public workoutService: WorkoutService ) { }

  ngOnInit(): void {

    this.workoutService.getJSON().subscribe(workoutGroup => {
      this.workoutData = workoutGroup

      this.exerciseNames = Array.from( new Set( workoutGroup.map((workout) =>
        Object.keys(workout.exercises)).reduce((prev, curr) =>
          prev.concat(curr)
        ))
      )

    })
  }

}
