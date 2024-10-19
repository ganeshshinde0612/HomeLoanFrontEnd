import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCrmComponent } from './admin-crm/admin-crm.component';
import { LoanDetailsTableComponent } from './loan-details-table/loan-details-table.component';
import { AdminOeComponent } from './admin-oe/admin-oe.component';
import { OeLoanDetailsComponent } from './oe-loan-details/oe-loan-details.component';
import { ViewCustomerLoanComponent } from './view-customer-loan/view-customer-loan.component';
import { AdminCmComponent } from './admin-cm/admin-cm.component';
import { CmLoanDetailsComponent } from './cm-loan-details/cm-loan-details.component';
import { AdminAhComponent } from './admin-ah/admin-ah.component';
import { AhLoanDetailsComponent } from './ah-loan-details/ah-loan-details.component';

const routes: Routes = [
  {
    path:'successlogin', component:AdminHomeComponent, children:[
      {
        path:'view_enquiry', component:AdminCrmComponent
      },
      {
        path:'viewloanapp', component:LoanDetailsTableComponent
      },
      {
        path:'viewoeinquiries', component:AdminOeComponent
      },
      {
        path:'viewoeloanapp', component:OeLoanDetailsComponent, children:[
          {
            path:'viewDetails', component:ViewCustomerLoanComponent
          }
        ]
      },
     {
      path:'viewcmloanapp', component:AdminCmComponent, children:[
        {
          path:'viewDetailscm', component:CmLoanDetailsComponent
        }
      ]
     }
     ,
     {
      path:'viewahloanapp', component:AdminAhComponent,children:[
        {
          path:'viewDetailsah', component:AhLoanDetailsComponent
        }
      ]
     }
      
    ] 
  },
  {
    path:'oelogin', component:AdminHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
