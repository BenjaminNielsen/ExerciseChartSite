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
  // TODO remove public workoutData: WorkoutData[]
  //public selectedExercise: string

  //public exerciseNames: string[]

  constructor( public workoutService: WorkoutService ) { }

  ngOnInit(): void {
    //TODO remove this.workoutService.getWorkouts().subscribe((workouts) => this.workoutData = workouts)
    // this.workoutService.getWorkouts().subscribe((workouts) => this.exerciseNames = this.workoutService.getExerciseNames(workouts))
  }

}
