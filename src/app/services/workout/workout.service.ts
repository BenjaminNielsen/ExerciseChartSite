import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {WorkoutData} from '../../domain/workout/workout-data'
import {MuscleExercise} from '../../domain/exercise/MuscleExercise/muscle-exercise'

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) {
  }

  public getDateMappedMuscleSets(exerciseName: string, workouts: WorkoutData[]): Map<Date, MuscleExercise[]> {
    return workouts.filter((workout) => workout.exercises[exerciseName] !== undefined)
                   .reduce((map, obj) =>
                      map.set(new Date(obj.workoutDate), obj.exercises[exerciseName] as MuscleExercise[]),
                     new Map<Date, MuscleExercise[]>())
  }

  getWorkouts(): Observable<WorkoutData[]> {
    return this.http.get<WorkoutData[]>('../../assets/strong.json')
  }

  public getExerciseNames(workouts: WorkoutData[]): Array<string> {
    return Array.from(new Set<string>(workouts.map((workout) =>
        Object.keys(workout.exercises)).reduce((prev, curr) =>
        prev.concat(curr)
      ))
    )
  }

}
