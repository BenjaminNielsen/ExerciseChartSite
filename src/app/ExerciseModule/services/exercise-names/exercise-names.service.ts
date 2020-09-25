import { Injectable } from '@angular/core'
import {APIService, ListExercisesQuery} from '../../API.service'
import {DefaultExercises} from '../../domain/constants/defaultExercises'
import {from, Observable, of} from 'rxjs'
import {distinct, map, pluck, reduce, take} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ExerciseNamesService {

  allExerciseNames: Array<ExerciseIdentifier>

  constructor(public api: APIService) { }

  // public getExerciseNames(): Array<ExerciseIdentifier> {
  //   console.log('in get exerciseNames with: %o', this.allExerciseNames)
  //   if (!this.allExerciseNames){
  //     this.api.ListExercises(null, 1000).then((event: ListExercisesQuery) => {
  //       this.allExerciseNames = []
  //       this.allExerciseNames = this.allExerciseNames.concat(DefaultExercises)
  //       const exerciseNameSet = new Set<string>(event.items.map((item) => item.name))
  //       exerciseNameSet.forEach((uniqueName) => {
  //         if (!DefaultExercises.find((defaultVal) => defaultVal.name === uniqueName)) {
  //           console.log('adding names')
  //           this.allExerciseNames.push({name: uniqueName, id: this.allExerciseNames.length})
  //         }
  //       })
  //     })
  //     console.log('get here first?')
  //   }
  //   return this.allExerciseNames
  // }

  public exerciseNames(): Observable<string[]> {
    return from(this.api.ListExercises(null, 1000)).pipe(
      map(value => Array.from(new Set(value.items.map((item) => item.name))))
    )
  }


}
