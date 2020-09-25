import {Component, OnInit} from '@angular/core'
import {DefaultExercises} from '../../domain/constants/defaultExercises'
import {ExerciseNamesService} from '../../services/exercise-names/exercise-names.service'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public defaultExercises = DefaultExercises

  public otherExerciseNames: Array<string>

  constructor(public nameService: ExerciseNamesService) {
  }

  ngOnInit(): void {
     this.nameService.exerciseNames().subscribe((names) => {
       this.otherExerciseNames = names.filter(name => DefaultExercises.some(defaultEx => defaultEx.name === name))
     })
     console.log(this.otherExerciseNames)
     // this.otherExerciseNames = this.otherExerciseNames.filter((exercise) => {
     //   return !this.defaultExercises.find((defaultEx) => defaultEx.id === exercise.id)
     // })

  }

}
