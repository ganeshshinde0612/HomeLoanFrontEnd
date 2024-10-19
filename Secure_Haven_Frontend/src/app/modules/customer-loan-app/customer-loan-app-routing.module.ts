import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoanApplicationComponent } from './multistep_loan_form/customer-loan-application/customer-loan-application.component';
import { CustomerFamilyDetailsComponent } from './multistep_loan_form/customer-family-details/customer-family-details.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerDashboardHomeComponent } from './customer-dashboard-home/customer-dashboard-home.component';
import { LoanStatusComponent } from './loan-status/loan-status.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
// import { CustomerInfoComponent } from './multistep_loan_form/customer-info/customer-info.component';

const routes: Routes = [

  {
    path:'viewloandetails/:id', component:CustomerDetailsComponent
  },
  {
    path:'successlogin/:data', component:CustomerDashboardComponent,

    children:[
      {
        path:'applyloan', component:CustomerLoanApplicationComponent
      },
      {
        path:'loanstatus', component:LoanStatusComponent
      },
     
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerLoanAppRoutingModule { }
