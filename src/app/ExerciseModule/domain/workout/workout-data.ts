import {Exercise} from '../exercise/exercise'

export class WorkoutData {
  workoutDate: Date
  name: string
  exercises: Map<string, Exercise[]>
  workoutNotes: string
}
