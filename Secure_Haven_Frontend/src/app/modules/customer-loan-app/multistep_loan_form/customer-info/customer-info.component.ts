import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanAppService } from '../../../../services/loan-app.service';
import { CustomerLogin } from '../../../../model/customer-login';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { SuccessEnquiry } from '../../../../model/success-enquiry';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrl: './customer-info.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomerInfoComponent implements OnInit{

  constructor(private fb : FormBuilder, private loanservice:LoanAppService, private activateroute:ActivatedRoute, private router:Router){}
customerinfo:FormGroup

  ngOnInit(): void {
    this.customerinfo=this.fb.group(
      {
          
          firstName:[],
          middleName:[],
          lastName:[],
          age:[],
          gender:[],
          dob:[],
          mobileNo:[],
          email:[],
          username:[],
          password:[],
          aadhar:['', [Validators.required,Validators.pattern('^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$')]],
          pancard:['', [Validators.required,Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
          maritalStatus:['', [Validators.required]],
          totalloanrequired:['',[Validators.required]]
      } )

      this.patchCustomerRegistrationData();
      // this.getCustomerRegistrationData(1);
  }

  patchCustomerRegistrationData()
  {
    let id

    // this.activateroute.paramMap.subscribe(
    //   map=>
    //     {
    //       id=map.get('data')
    //     }
    // )
    id=localStorage.getItem("uid")

    
      this.loanservice.getCustomerRegistrationData(id).subscribe(
        (data:CustomerLogin)=>
          {
            this.customerinfo.patchValue(data)
          }
      )
  }

 

  onSubmit(){
        this.loanservice.saveCustomerInfo(this.customerinfo.value).subscribe(

          (data:SuccessEnquiry)=>
            {
              let app_id=data.id.toString()
              localStorage.setItem("app_id",app_id)
            }
        )
        // var email= this.customerinfo.controls['email'].value
        // localStorage.setItem("email", email)
  }

}
