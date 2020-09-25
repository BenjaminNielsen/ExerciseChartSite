import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {ExerciseNamesService} from '../../services/exercise-names/exercise-names.service'

@Component({
  selector: 'app-exercise-content',
  templateUrl: './exercise-content.component.html',
  styleUrls: ['./exercise-content.component.css']
})
export class ExerciseContentComponent implements OnInit {

  public selectedExerciseName: string

  constructor(private route: ActivatedRoute, private nameService: ExerciseNamesService) {
  }

  ngOnInit(): void {

    this.nameService.getExerciseIdentifiers().subscribe((identifiers) => {
      const exerciseNames = identifiers

      this.route.paramMap.subscribe(params => {
        this.selectedExerciseName = exerciseNames[+params.get('exerciseId')]?.name
      })
    })

  }

}
