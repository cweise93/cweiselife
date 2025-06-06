import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgoalComponent } from './newgoal.component';

describe('NewgoalComponent', () => {
  let component: NewgoalComponent;
  let fixture: ComponentFixture<NewgoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewgoalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
