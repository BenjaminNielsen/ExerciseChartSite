import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {DefaultExercises} from '../../domain/constants/defaultExercises'

@Component({
  selector: 'app-exercise-content',
  templateUrl: './exercise-content.component.html',
  styleUrls: ['./exercise-content.component.css']
})
export class ExerciseContentComponent implements OnInit {

  public selectedExerciseName: string

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedExerciseName = DefaultExercises[+params.get('exerciseId')].name
    })
  }

}
