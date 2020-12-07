import {Injectable} from '@angular/core'
import {GetMuscleExerciseQuery} from '../../../API.service'

@Injectable({
  providedIn: 'root'
})
export class ExerciseCalculationServiceService {

  constructor() { }

  static get1RM(exercise: GetMuscleExerciseQuery): number {
    return exercise.weight * (1 + (exercise.reps / 30))
  }

  public getHighest1RM(exercises: GetMuscleExerciseQuery[]): number {
    return Math.max(...exercises.map((exercise) => ExerciseCalculationServiceService.get1RM(exercise)))
  }

  public getHighestWeight(exercises: GetMuscleExerciseQuery[]): number {
    return Math.max(...(exercises.map((exercise) => exercise.weight)))
  }

  public getHighestVolume(exercises: GetMuscleExerciseQuery[]): number {
    return Math.max(...(exercises.map((exercise: GetMuscleExerciseQuery) => exercise.weight * exercise.reps)))
  }

}
