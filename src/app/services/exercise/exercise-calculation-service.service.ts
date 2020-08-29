import { Injectable } from '@angular/core'
import {MuscleExercise} from '../../domain/exercise/MuscleExercise/muscle-exercise'

@Injectable({
  providedIn: 'root'
})
export class ExerciseCalculationServiceService {

  constructor() { }

  static get1RM(exercise: MuscleExercise): number {
    return exercise.weight * (1 + (exercise.reps / 30))
  }

  public getHighest1RM(exercises: MuscleExercise[]): number {
    return Math.max(...exercises.map((exercise) => ExerciseCalculationServiceService.get1RM(exercise)))
  }
}
