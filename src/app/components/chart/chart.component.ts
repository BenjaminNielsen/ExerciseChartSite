import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import {WorkoutData} from '../../domain/workout/workout-data';
import {WorkoutService} from '../../services/workout/workout.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private workoutData: WorkoutData[];

  constructor(private workoutService: WorkoutService ) { }

  ngOnInit(): void {
    const subscription = this.workoutService.getJSON().subscribe(workout => {
      this.workoutData = workout;
      console.log(this.workoutData);
      console.log(this.workoutData[0]);
    } );
  }

}
