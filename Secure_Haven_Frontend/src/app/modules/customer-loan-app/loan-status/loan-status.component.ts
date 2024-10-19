import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanAppService } from '../../../services/loan-app.service';
import { CustomerLoanApplication } from '../../../model/customer-loan-application';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrl: './loan-status.component.css'
})
export class LoanStatusComponent  implements OnInit{

  constructor(private fb:FormBuilder, private loanservice:LoanAppService, private router:Router)
  {

  }

  applicationForm:FormGroup
  ngOnInit(): void {
    
    this.applicationForm=this.fb.group(
      {
        app_id:[]
      }
    )
  }

  app_id:string
  customerData:CustomerLoanApplication
  message:string

  viewApplication()
  {
    this.app_id=this.applicationForm.controls["app_id"].value

    this.loanservice.getSingleApplicant(this.app_id).subscribe(

      (data:CustomerLoanApplication)=>
        {
          this.customerData=data

          this.router.navigateByUrl("loanmodule/viewloandetails/"+this.app_id)
        },

        (errormsg)=>
          {
            this.message=errormsg.error.msg 
          }
    )
  }

}
