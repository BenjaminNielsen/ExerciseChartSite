import {TestBed} from '@angular/core/testing'

import {ExerciseCalculationServiceService} from './exercise-calculation-service.service'

describe('ExerciseCalculationServiceService', () => {
  let service: ExerciseCalculationServiceService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ExerciseCalculationServiceService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
