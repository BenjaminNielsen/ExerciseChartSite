import { Injectable } from '@angular/core'
import {from, Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {ExerciseIdentifier} from '../../domain/ExerciseIdentifier/ExerciseIdentifier'
import {APIService} from '../../../API.service'


@Injectable({
  providedIn: 'root'
})
export class ExerciseNamesService {

  constructor(public api: APIService) { }

  public exerciseNames(): Observable<string[]> {
    return from(this.api.ListMuscleExercises(null, 1000)).pipe(
      map(listQueryResult => Array.from(new Set(listQueryResult.items.map((item) => item.name))))
    )
  }

  public getExerciseIdentifiers(): Observable<ExerciseIdentifier[]> {
    return this.exerciseNames().pipe(
      map(uniqueNames => uniqueNames.map((name, index) => new ExerciseIdentifier(index, name)))
    )
  }


}
