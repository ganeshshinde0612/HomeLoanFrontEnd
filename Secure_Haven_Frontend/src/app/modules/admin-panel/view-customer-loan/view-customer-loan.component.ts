import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { CustomerLoanApplication } from '../../../model/customer-loan-application';
import { CibilInfo } from '../../../model/cibil-info';
import { SuccessEnquiry } from '../../../model/success-enquiry';

@Component({
  selector: 'app-view-customer-loan',
  templateUrl: './view-customer-loan.component.html',
  styleUrl: './view-customer-loan.component.css'
})
export class ViewCustomerLoanComponent implements OnInit{


  constructor(private adminservice:AdminService)
  {

  }

  ngOnInit(): void {
    
    this.getCustomerLoanInfo();
  }

  customerData:CustomerLoanApplication
  getCustomerLoanInfo()
  {
    let id=localStorage.getItem("viewdetails")
    this.adminservice.getCustomerLoanData(id).subscribe(
      (data:CustomerLoanApplication)=>
        {
          this.customerData=data
        }
    )
  }

  cibilData:CibilInfo

  checkCibil()
  {
    // let pancard=this.customerData.customerinfo.pancard
    // let id=22
    this.adminservice.checkCibil().subscribe(
      (data:CibilInfo)=>
        {
          this.cibilData=data
        }
    )
  }

  verifyDocxMessage:string
  verifyDocuments()
  {
    this.adminservice.verifyDocuments().subscribe(
      (data:SuccessEnquiry)=>
        {
          this.verifyDocxMessage=data.message
        }
    )
  }

  

  hide:boolean=true
  forwardtoCM()
  {
    let app_id=localStorage.getItem("viewdetails")
    this.adminservice.saveAcceptedApplication(app_id, this.cibilData.status, this.cibilData.cibilScore).subscribe();
  
    this.hide=false
  }

}
