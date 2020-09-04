import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphApiTestComponent } from './graph-api-test.component';

describe('GraphApiTestComponent', () => {
  let component: GraphApiTestComponent;
  let fixture: ComponentFixture<GraphApiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphApiTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphApiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
