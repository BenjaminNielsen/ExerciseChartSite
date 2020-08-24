import { Component, OnInit } from '@angular/core'
import {WorkoutData} from '../../domain/workout/workout-data'
import {WorkoutService} from '../../services/workout/workout.service'
import {DefaultExercises} from '../../domain/constants/defaultExercises'
import {Exercise} from '../../domain/exercise/exercise'

@Component({
  selector: 'app-chart',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css']
})
export class ChartDashboardComponent implements OnInit {

  public defaultExerciseNames = DefaultExercises.defaultExerciseNames
  public workoutData: WorkoutData[]
  public selectedExercise: string

  public exerciseNames = []

  //Probably useless section
  public benchData: Map<Date, Exercise[]>
  public militaryPressData: Map<Date, Exercise[]>
  public deadliftData: Map<Date, Exercise[]>
  public squatData: Map<Date, Exercise[]>


  constructor( public workoutService: WorkoutService ) { }

  ngOnInit(): void {


    this.workoutService.getJSON().subscribe(workoutGroup => {
      this.workoutData = workoutGroup

      this.exerciseNames = Array.from( new Set( workoutGroup.map((workout) =>
        Object.keys(workout.exercises)).reduce((prev, curr) =>
          prev.concat(curr)
        ))
      )

      console.log('getDateMapped: %o', DefaultExercises.defaultExerciseNames[0])
      //console.log('getDateMapped Results %o', WorkoutService.getDateMappedExerciseSets(DefaultExercises.defaultExerciseNames[0], workoutGroup))
      console.log(this.exerciseNames)
      //this.benchData = WorkoutService.getDateMappedExerciseSets()
      workoutGroup.forEach(workout => {
        // exerciseNamesSet.add(Object.keys(workout.exercises))
        const totalSets = Object.values(workout.exercises).reduce(( totals: number, currentVal) => totals + currentVal.length, 0)

      })
      // this.exerciseNames = Array.from(exerciseNamesSet)
    })
  }






}
