import { Injectable } from '@angular/core'
import API, { graphqlOperation } from '@aws-amplify/api'
import { GraphQLResult } from '@aws-amplify/api/lib/types'
import { Observable } from 'zen-observable-ts'


@Injectable({
  providedIn: 'root'
})
export class WorkoutApiService {

  constructor() { }


  async fetchNotes() {

  }
}
