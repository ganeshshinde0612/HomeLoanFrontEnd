import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanAppService } from '../../../../services/loan-app.service';

@Component({
  selector: 'app-customer-mortgage',
  templateUrl: './customer-mortgage.component.html',
  styleUrl: './customer-mortgage.component.css'
})
export class CustomerMortgageComponent implements OnInit{

  constructor(private fb:FormBuilder, private loanservice:LoanAppService){ }
  customermortgage:FormGroup

  ngOnInit(): void {
    this.customermortgage=this.fb.group(
      {
        id:[],
        propertyValue:['',Validators.required],
        propertyType:['',Validators.required],
        loanOnProperty:['',Validators.required]
      }
    )
  }
  onSubmit(){

    let app_id=localStorage.getItem("app_id")
    this.loanservice.saveCustomerMortgage(this.customermortgage.value,app_id).subscribe()
    
  }

}
