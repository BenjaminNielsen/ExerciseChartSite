import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NgxMuscleExerciseChartComponent } from './ngx-muscle-exercise-chart.component'

describe('NgxMuscleExerciseChartComponent', () => {
  let component: NgxMuscleExerciseChartComponent
  let fixture: ComponentFixture<NgxMuscleExerciseChartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMuscleExerciseChartComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMuscleExerciseChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
