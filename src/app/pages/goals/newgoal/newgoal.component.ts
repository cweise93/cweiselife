import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
/**
 * @title New Goal Generator
 */
@Component({
  selector: 'app-newgoal',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
  ],
  templateUrl: './newgoal.component.html',
  styleUrl: './newgoal.component.scss',
  providers: [ 
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewgoalComponent {
  private _formBuilder = inject(FormBuilder);

  visionFormGroup = this._formBuilder.group({
    visionCtrl: ['', Validators.required],
  });
  valuesFormGroup = this._formBuilder.group({
    valuesCtrl: ['', Validators.required],
  });
  methodsFormGroup = this._formBuilder.group({
    methodsCtrl: ['', Validators.required],
  });
  obstaclesFormGroup = this._formBuilder.group({
    obstaclesCtrl: ['', Validators.required],
  });
  measurementsFormGroup = this._formBuilder.group({
    measurementsCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  step = signal(0);
  readonly panelOpenState = signal(false);
  constructor(
  ) {
    const breakpointObserver = inject(BreakpointObserver);
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

}
