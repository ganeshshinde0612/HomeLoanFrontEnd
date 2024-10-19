import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry.service';
import { SuccessEnquiry } from '../../model/success-enquiry';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent implements OnInit{

  constructor(private formbuilder:FormBuilder, private enquiry_service:EnquiryService) {

    // const today = new Date();
    // const year = new Date(today);
    // complete 18 years to valid
    // year.setDate(year.getDate() - 6600); 
    // Format the date in YYYY-MM-DD format
    // this.minDate = year.toISOString().split('T')[0];
  }
  customerenquiry:FormGroup
  message:string

    ngOnInit(): void {
      this.customerenquiry=this.formbuilder.group(
        {
           
           firstName:['',[Validators.required]],
           middleName:['',[Validators.required]],
           lastName:['',[Validators.required]],
           age:['',[Validators.required]],
           gender:['',[Validators.required]],
           email:['',[Validators.required, Validators.email]],
           mobileNo:['',[Validators.required, Validators.pattern('^[6789][0-9]{9}$')]],
           pancard:['', [Validators.required,Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]]
          //  ,
          //  cibilinfo:this.formbuilder.group(
          //   {
                
          //       cibilScore:[],
          //       cibilDate:[]
          //   })
        })
    }

    onSubmit(){
      if(this.customerenquiry.invalid){

        // this.customerenquiry.controls['id'].markAsTouched()
        this.customerenquiry.controls['firstName'].markAsTouched()
        this.customerenquiry.controls['middleName'].markAsTouched()
        this.customerenquiry.controls['lastName'].markAsTouched()
        this.customerenquiry.controls['age'].markAsTouched()
        this.customerenquiry.controls['gender'].markAsTouched()
        this.customerenquiry.controls['email'].markAsTouched()        
        this.customerenquiry.controls['mobileNo'].markAsTouched()
        this.customerenquiry.controls['pancard'].markAsTouched()
        
      }
      else{
      this.enquiry_service.save_Enquiry(this.customerenquiry.value).subscribe(
        (data:SuccessEnquiry)=>
          {
            this.message=data.message
          }
          
          // (error:any)=>
          //   {
          //     this.message=error.exceptions.msg
          //   }
      )
       alert('data Saves Successfully')
      // console.log(this.customerenquiry.value)
    }
    }

}
