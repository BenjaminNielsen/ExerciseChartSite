import {Component, OnInit} from '@angular/core'
import {DefaultExercises} from '../../domain/constants/defaultExercises'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {APIService, ListExercisesQuery} from '../../API.service'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public defaultExercises = DefaultExercises
  items: string[] = ['Item1', 'Item2', 'Item3']
  model = new FormGroup({
    item: new FormControl('', [ Validators.required, Validators.minLength(4)]),
  })

  public exerciseNames = []

  constructor(public api: APIService) {
  }

  ngOnInit(): void {
    this.api.ListExercises(null, 1000).then((event: ListExercisesQuery) => {
      const exerciseNameSet = new Set<string>(event.items.map((item) => item.name))
      exerciseNameSet.forEach((uniqueName) => {
        if (this.defaultExercises.some((defaultVal) => defaultVal.name !== uniqueName)){
          this.exerciseNames.push({id: this.defaultExercises.length + this.exerciseNames.length, name: uniqueName})
        }
      })
    })
  }

}
