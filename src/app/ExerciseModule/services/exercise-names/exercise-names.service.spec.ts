import { TestBed } from '@angular/core/testing';

import { ExerciseNamesService } from './exercise-names.service';

describe('ExerciseNamesService', () => {
  let service: ExerciseNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
