import { Component, ViewEncapsulation } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import {StepperOrientation} from '@angular/material/stepper';

@Component({
  selector: 'app-customer-loan-application',
  templateUrl: './customer-loan-application.component.html',
  styleUrl: './customer-loan-application.component.css',
  encapsulation: ViewEncapsulation.None
})
export class CustomerLoanApplicationComponent {
  constructor(
    private fb: FormBuilder,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)') 
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
  // firstFormGroup = this.fb.group({
   
  // });
  // secondFormGroup = this.fb.group({
   
  // });
  // thirdFormGroup = this.fb.group({
    
  // });
  // forthFormGroup = this.fb.group({
    
  // });

  stepperOrientation: Observable<StepperOrientation>;

  onSubmit(){
    alert('call')
    // console.log(this.Customer_Loan_Application.value)
   
  }

}
