import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanAppService } from '../../../../services/loan-app.service';

@Component({
  selector: 'app-customer-education',
  templateUrl: './customer-education.component.html',
  styleUrl: './customer-education.component.css'
})
export class CustomerEducationComponent implements OnInit{

  constructor(private fb:FormBuilder, private loanservice:LoanAppService){ }
  customer_education_details:FormGroup
  ngOnInit(): void {
    this.customer_education_details=this.fb.group(
      {
        id:[],
        speciallization:[],
        qualification:[],
        passingYear:[],
        collegeName:[]
      }
    )
  }
  onSubmit(){
    
    let app_id=localStorage.getItem("app_id")
    this.loanservice.saveCustomerEducation(this.customer_education_details.value,app_id).subscribe()
  }

}
