import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanAppService } from '../../../../services/loan-app.service';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrl: './customer-address.component.css'
})
export class CustomerAddressComponent implements OnInit{

  constructor(private fb:FormBuilder, private loanservice:LoanAppService){}
  customeraddress:FormGroup
  ngOnInit(): void {
    this.customeraddress=this.fb.group(
      {
        id:[],
        houseNo:['',Validators.required],
        areaName:['',Validators.required],
        cityName:['',Validators.required],
        district:['',Validators.required],
        state:['',Validators.required],
        pincode:['',Validators.required]
      }
    )
  }
  onSubmit(){
    let app_id=localStorage.getItem("app_id")
    this.loanservice.saveCustomerAddress(this.customeraddress.value,app_id).subscribe()
  }

  active:boolean=true

  onChange()
  {
    if(this.customeraddress.invalid)
      {
        this.active=true
      }
      else{
        this.active=false
      }
  }
}
