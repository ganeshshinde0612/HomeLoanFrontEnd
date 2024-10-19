import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SideSidemenuComponent } from './side-sidemenu/side-sidemenu.component';
import { AdminCrmComponent } from './admin-crm/admin-crm.component';
import { AdminOeComponent } from './admin-oe/admin-oe.component';
import { AdminCmComponent } from './admin-cm/admin-cm.component';
import { AdminAhComponent } from './admin-ah/admin-ah.component';
import { LoanDetailsTableComponent } from './loan-details-table/loan-details-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OeLoanDetailsComponent } from './oe-loan-details/oe-loan-details.component';
import { ViewCustomerLoanComponent } from './view-customer-loan/view-customer-loan.component';
import { CmLoanDetailsComponent } from './cm-loan-details/cm-loan-details.component';
import { AhLoanDetailsComponent } from './ah-loan-details/ah-loan-details.component';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminHomeComponent,
    SideSidemenuComponent,
    AdminCrmComponent,
    AdminOeComponent,
    AdminCmComponent,
    AdminAhComponent,
    LoanDetailsTableComponent,
    OeLoanDetailsComponent,
    ViewCustomerLoanComponent,
    CmLoanDetailsComponent,
    AhLoanDetailsComponent

  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class AdminPanelModule { }
