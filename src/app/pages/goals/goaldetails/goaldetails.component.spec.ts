import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaldetailsComponent } from './goaldetails.component';

describe('GoaldetailsComponent', () => {
  let component: GoaldetailsComponent;
  let fixture: ComponentFixture<GoaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoaldetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
