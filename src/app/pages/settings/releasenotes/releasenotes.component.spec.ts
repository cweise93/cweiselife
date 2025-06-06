import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasenotesComponent } from './releasenotes.component';

describe('ReleasenotesComponent', () => {
  let component: ReleasenotesComponent;
  let fixture: ComponentFixture<ReleasenotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleasenotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleasenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
