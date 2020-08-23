import { Injectable } from '@angular/core'
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {WorkoutData} from '../../domain/workout/workout-data'

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<WorkoutData[]> {
    return this.http.get<WorkoutData[]>('../../assets/strong.json')
  }
}
