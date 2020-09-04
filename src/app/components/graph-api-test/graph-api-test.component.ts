import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {APIService} from '../../API.service'

@Component({
  selector: 'app-graph-api-test',
  templateUrl: './graph-api-test.component.html',
  styleUrls: ['./graph-api-test.component.css']
})
export class GraphApiTestComponent implements OnInit {

  public createForm: FormGroup

  constructor(private api: APIService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  public onCreate(restaurant: any): void {
    this.api.CreateRestaurant(restaurant).then(event => {
      console.log('item created!')
      this.createForm.reset()
    })
      .catch(e => {
        console.log('error creating restaurant...', e)
      })
  }

}
