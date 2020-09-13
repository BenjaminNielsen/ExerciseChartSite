import {Component, OnInit} from '@angular/core'
import {DefaultExercises} from '../../domain/constants/defaultExercises'

@Component({
  selector: 'app-chart',
  templateUrl: './chart-dashboard.component.html',
  styleUrls: ['./chart-dashboard.component.css']
})
export class ChartDashboardComponent implements OnInit {

  public defaultExerciseNames = DefaultExercises.defaultExerciseNames

  constructor( ) { }

  ngOnInit(): void {  }

}
