import {Component, OnInit} from '@angular/core'
import {Restaurant} from './domain/test/restaurant'
import {APIService} from './API.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'exercise-chart-site'

  // TODO remove after testing is finished
  restaurants: Array<Restaurant>

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListRestaurants().then(event => {
      this.restaurants = event.items
    })
    this.api.OnCreateRestaurantListener.subscribe( (event: any) => {
      const newRestaurant = event.value.data.onCreateRestaurant
      this.restaurants = [newRestaurant, ...this.restaurants]
      console.log(this.restaurants)
    })
  }
}
