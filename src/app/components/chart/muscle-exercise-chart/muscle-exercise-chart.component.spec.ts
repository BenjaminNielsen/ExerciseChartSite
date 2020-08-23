import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MuscleExerciseChartComponent } from './muscle-exercise-chart.component'

describe('MuscleExerciseChartComponent', () => {
  let component: MuscleExerciseChartComponent
  let fixture: ComponentFixture<MuscleExerciseChartComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscleExerciseChartComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleExerciseChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
