import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoanAppService } from '../../../../services/loan-app.service';
import { SuccessEnquiry } from '../../../../model/success-enquiry';

@Component({
  selector: 'app-customer-family-details',
  templateUrl: './customer-family-details.component.html',
  styleUrl: './customer-family-details.component.css'
})
export class CustomerFamilyDetailsComponent implements OnInit{

  constructor(private fb:FormBuilder, private activateroute:ActivatedRoute,private loanservice:LoanAppService){}

  customer_family_details:FormGroup

  email:string
  ngOnInit(): void {
    this.customer_family_details=this.fb.group(
      {
        id:[],
        fatherName:[],
        motherName:[],
        noOfChild:[],
        noOfFamilyMember:[],
        familyIncome:[]
      })

      // this.email=localStorage.getItem("email")
      // this.getCustomerApplicationId();
  }

  // app_id:number
  // getCustomerApplicationId()
  // {
  //   this.loanservice.getCustomerApplicationId(this.email).subscribe(
  //     (data:SuccessEnquiry)=>
  //       {
  //         this.app_id=data.id
  //         alert(this.app_id)
  //       }
  //   )
  // }

  active:boolean=true

  onChange()
  {
    if(this.customer_family_details.invalid)
      {
        this.active=true
      }
      else{
        this.active=false
      }
  }
  onSubmit(){
    
    let app_id=localStorage.getItem("app_id")
    this.loanservice.saveFamilyDetails(this.customer_family_details.value,app_id).subscribe()
  }

}
