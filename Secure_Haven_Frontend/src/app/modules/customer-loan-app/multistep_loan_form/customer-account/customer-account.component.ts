import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanAppService } from '../../../../services/loan-app.service';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent implements OnInit{

  constructor(private fb:FormBuilder, private loanservice:LoanAppService){ }

  AccountDetails:FormGroup

    ngOnInit(): void {
      this.AccountDetails=this.fb.group(
        {
          id:[],
          accountType:['',Validators.required],
          accountHolderName:['',Validators.required],
          accountNo:['',Validators.required]
        }
      )
    }
  
    onSubmit(){

      let app_id=localStorage.getItem("app_id")
      this.loanservice.saveCustomerAccount(this.AccountDetails.value,app_id).subscribe()
    
    }

}
