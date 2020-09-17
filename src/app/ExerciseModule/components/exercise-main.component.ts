import {Component, OnInit} from '@angular/core'
import {DefaultExercises} from '../domain/constants/defaultExercises'

@Component({
  selector: 'app-exercise-main',
  templateUrl: './exercise-main.component.html',
  styleUrls: ['./exercise-main.component.css']
})
export class ExerciseMainComponent {

  public defaultExercises = DefaultExercises

  constructor() { }

}
