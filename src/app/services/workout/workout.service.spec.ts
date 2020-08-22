import { TestBed } from '@angular/core/testing';

import { WorkoutService } from './workout.service';
import {WorkoutData} from '../../domain/workout/workout-data';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return workout objects', () => {

  });
});
