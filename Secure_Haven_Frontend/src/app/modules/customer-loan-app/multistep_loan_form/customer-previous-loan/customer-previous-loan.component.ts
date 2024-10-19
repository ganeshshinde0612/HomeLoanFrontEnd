import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanAppService } from '../../../../services/loan-app.service';

@Component({
  selector: 'app-customer-previous-loan',
  templateUrl: './customer-previous-loan.component.html',
  styleUrl: './customer-previous-loan.component.css'
})
export class CustomerPreviousLoanComponent implements OnInit{

  previousloan:FormGroup
  constructor(private fb:FormBuilder, private loanservice:LoanAppService){ }
  ngOnInit(): void {
    this.previousloan=this.fb.group(
      {
        id:[],
        loanAmount:['',Validators.required],
        paidAmount:['',Validators.required],
        remainingAmount:['',Validators.required],
        loanStatus:['',Validators.required],
        ifscCode:['',Validators.required],
        bankName:['',Validators.required]
      }
    )
  }
  onSubmit(){

    let app_id=localStorage.getItem("app_id")
    this.loanservice.savePreviousLoan(this.previousloan.value,app_id).subscribe()
    
  }

}
