import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { CustomerLoanAppRoutingModule } from './customer-loan-app-routing.module';
import { CustomerLoanApplicationComponent } from './multistep_loan_form/customer-loan-application/customer-loan-application.component';
import { CustomerInfoComponent } from './multistep_loan_form/customer-info/customer-info.component';
import { CustomerFamilyDetailsComponent } from './multistep_loan_form/customer-family-details/customer-family-details.component';
import { CustomerAddressComponent } from './multistep_loan_form/customer-address/customer-address.component';
import { CustomerEducationComponent } from './multistep_loan_form/customer-education/customer-education.component';
import { CustomerProfessionComponent } from './multistep_loan_form/customer-profession/customer-profession.component';
import { CustomerMortgageComponent } from './multistep_loan_form/customer-mortgage/customer-mortgage.component';
import { CustomerAccountComponent } from './multistep_loan_form/customer-account/customer-account.component';
import { CustomerPreviousLoanComponent } from './multistep_loan_form/customer-previous-loan/customer-previous-loan.component';
import { CustomerPropertyDetailsComponent } from './multistep_loan_form/customer-property-details/customer-property-details.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import { CustomerDashboardHomeComponent } from './customer-dashboard-home/customer-dashboard-home.component';
import { CustomerDocumentsComponent } from './multistep_loan_form/customer-documents/customer-documents.component';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';

@NgModule({
  declarations: [
    CustomerLoanApplicationComponent,
    CustomerInfoComponent,
    CustomerFamilyDetailsComponent,
    CustomerAddressComponent,
    CustomerEducationComponent,
    CustomerProfessionComponent,
    CustomerMortgageComponent,
    CustomerAccountComponent,
    CustomerPreviousLoanComponent,
    CustomerPropertyDetailsComponent,
    CustomerDashboardComponent,
    CustomerDashboardHomeComponent,
    CustomerDocumentsComponent,
    LoanStatusComponent,
    CustomerDetailsComponent,
    PaymentModalComponent
  ],
  imports: [
    CommonModule,
    CustomerLoanAppRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class CustomerLoanAppModule { }
