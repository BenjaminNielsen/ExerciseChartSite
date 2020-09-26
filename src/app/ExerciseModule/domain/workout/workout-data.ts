import {Exercise} from '../exercise/exercise'
import {DateTime} from 'luxon'

export class WorkoutData {
  workoutDate: DateTime
  name: string
  exercises: Map<string, Exercise[]>
  workoutNotes: string
}
