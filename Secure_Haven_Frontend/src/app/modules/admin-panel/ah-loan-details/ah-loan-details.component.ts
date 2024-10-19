import { Component, OnInit } from '@angular/core';
import { CustomerLoanApplication } from '../../../model/customer-loan-application';
import { AdminService } from '../../../services/admin.service';
import { SanctionLetter } from '../../../model/sanction-letter';
import { LoanDisbursement } from '../../../model/loan-disbursement';
import { SuccessEnquiry } from '../../../model/success-enquiry';

@Component({
  selector: 'app-ah-loan-details',
  templateUrl: './ah-loan-details.component.html',
  styleUrl: './ah-loan-details.component.css'
})
export class AhLoanDetailsComponent implements OnInit{

  constructor(private adminservice: AdminService) {

  }
  ngOnInit(): void {
    this.getCustomerLoanInfo()
    
  }

  customerData: CustomerLoanApplication
  getCustomerLoanInfo() {
    let id = localStorage.getItem("viewdetails")
    this.adminservice.getCustomerLoanData(id).subscribe(
      (data: CustomerLoanApplication) => {
        this.customerData = data
       
        this.getsanctiondetails()
      }
    )
  }

  sanctiondetails:SanctionLetter
  getsanctiondetails()
  {
    this.adminservice.getsinglesanction(this.customerData.id).subscribe(
      (data:SanctionLetter)=>
        {
          this.sanctiondetails=data;

        }
    )
  }

  disburseDetails:LoanDisbursement
  successMsg:string

  passDisburseDetails()
  {
    this.disburseDetails={
      
      app_id:this.customerData.id,
      amountPayType:"Internate Banking",
      totalAmount:this.customerData.customerinfo.totalloanrequired,
      bankName:"SBI",
      accountNumber:this.customerData.customeraccountdetails.accountNo,

      ifscCode:"SBIN9879",
      accountType:this.customerData.customeraccountdetails.accountType,
      transferAmount:this.sanctiondetails.loanAmountSanctioned,
    }

   
  }
  disburseLoan()
  {

    this.passDisburseDetails();

    this.adminservice.saveDesbursementDetails(this.disburseDetails).subscribe(
      (data:SuccessEnquiry)=>{
          this.successMsg=data.message
      }
    )
    
  }

}
