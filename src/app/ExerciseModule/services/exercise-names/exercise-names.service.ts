import { Injectable } from '@angular/core'
import {APIService, ListExercisesQuery} from '../../API.service'
import {DefaultExercises} from '../../domain/constants/defaultExercises'


@Injectable({
  providedIn: 'root'
})
export class ExerciseNamesService {

  allExerciseNames: Array<ExerciseIdentifier>

  constructor(public api: APIService) { }

  public getExerciseNames(): Array<ExerciseIdentifier> {
    console.log('in get exerciseNames with: %o', this.allExerciseNames)
    if (!this.allExerciseNames){
      this.api.ListExercises(null, 1000).then((event: ListExercisesQuery) => {
        this.allExerciseNames = []
        this.allExerciseNames = this.allExerciseNames.concat(DefaultExercises)
        const exerciseNameSet = new Set<string>(event.items.map((item) => item.name))
        exerciseNameSet.forEach((uniqueName) => {
          if (!DefaultExercises.find((defaultVal) => defaultVal.name === uniqueName)) {
            console.log('adding names')
            this.allExerciseNames.push({name: uniqueName, id: this.allExerciseNames.length})
          }
        })
      })
      console.log('get here first?')
    }
    return this.allExerciseNames
  }

  private generateExerciseNames(): void {
    // TODO look into making this non-blocking

  }
}
