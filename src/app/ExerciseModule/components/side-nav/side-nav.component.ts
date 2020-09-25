import {Component, OnInit} from '@angular/core'
import {ExerciseNamesService} from '../../services/exercise-names/exercise-names.service'
import {ExerciseIdentifier} from '../../domain/ExerciseIdentifier/ExerciseIdentifier'
import {DefaultExerciseNames} from '../../domain/constants/defaultExercises'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public defaultExercises: Array<ExerciseIdentifier>

  public otherExerciseNames: Array<ExerciseIdentifier>

  constructor(public nameService: ExerciseNamesService) {
  }

  ngOnInit(): void {
     this.nameService.getExerciseIdentifiers().subscribe((exerciseIdentifiers) => {
       this.defaultExercises = exerciseIdentifiers.filter(this.isDefaultExercise)
       this.otherExerciseNames = exerciseIdentifiers.filter(this.isNotDefaultExercise)
     })
  }

  private isDefaultExercise(exerciseIdentity: ExerciseIdentifier): boolean {
    return DefaultExerciseNames.some(defaultEx => defaultEx === exerciseIdentity.name)
  }

  private isNotDefaultExercise(exerciseIdentity: ExerciseIdentifier): boolean {
    return !DefaultExerciseNames.some(defaultEx => defaultEx === exerciseIdentity.name)
  }

}
