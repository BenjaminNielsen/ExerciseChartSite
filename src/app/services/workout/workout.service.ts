import { Injectable } from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {WorkoutData} from '../../domain/workout/workout-data'
import {Exercise} from '../../domain/exercise/exercise'

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private allWorkoutData: WorkoutData[]

  constructor(private http: HttpClient) {
  }

  public getDateMappedExerciseSets(exerciseName: string, workoutData: WorkoutData[]): Map<Date, Exercise[]>{
    return workoutData
      .filter((workout) => workout.exercises[exerciseName] !== undefined)
      .reduce((map, obj) =>
          map.set(new Date(obj.workoutDate), obj.exercises[exerciseName])
        , new Map<Date, Exercise[]>())
  }

  public getJSON(): Observable<WorkoutData[]> {
    return this.http.get<WorkoutData[]>('../../assets/strong.json')
  }

  public async getAllWorkoutData(): Promise<WorkoutData[]> {
    if (!this.allWorkoutData){
      const workoutPromise = this.http.get<WorkoutData[]>('../../assets/strong.json').toPromise()
      this.allWorkoutData = await workoutPromise
    }

    return this.allWorkoutData
  }
}
