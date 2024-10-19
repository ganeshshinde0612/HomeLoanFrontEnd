import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { SuccessEnquiry } from '../../model/success-enquiry';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  minDate: string;
  constructor(private fb:FormBuilder, private loginService:LoginService){ 
      // Calculate tomorrow's date
      const today = new Date();
      const year = new Date(today);
      // complete 18 years to valid
      year.setDate(year.getDate() - 6600); 
      
      // Format the date in YYYY-MM-DD format
      this.minDate = year.toISOString().split('T')[0];
  }
  CustomerRegister:FormGroup
  message:string

  ngOnInit(): void {
    this.CustomerRegister=this.fb.group(
      {
        id: [],
        firstName: ['', Validators.required],
        middleName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', [Validators.required,Validators.max(100),Validators.pattern('^[0-9]{2}$')]],
        gender: ['', Validators.required],
        dob: ['', Validators.required],
        mobileNo: ['', [Validators.required, Validators.pattern('^[6789][0-9]{9}')]],
        email: ['', Validators.required],
        username: ['', [Validators.required,Validators.pattern('^[A-Za-z0-9$#@]{6,10}$')]],
        password: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9@#$]{5,8}$')]]
        // ,
        // otp: ['', Validators.required],
        // randompassword: ['', Validators.required]
      })
  }
  onSubmit(){
    if (this.CustomerRegister.invalid) {
      // alert('data incorrect')
     this.CustomerRegister.controls['firstName'].markAsTouched()
     this.CustomerRegister.controls['middleName'].markAsTouched()
     this.CustomerRegister.controls['lastName'].markAsTouched()
     this.CustomerRegister.controls['age'].markAsTouched()
     this.CustomerRegister.controls['gender'].markAsTouched()
     this.CustomerRegister.controls['dob'].markAsTouched()
     this.CustomerRegister.controls['mobileNo'].markAsTouched()
     this.CustomerRegister.controls['email'].markAsTouched()
     this.CustomerRegister.controls['username'].markAsTouched()
     this.CustomerRegister.controls['password'].markAsTouched()
    } else {
     
     this.loginService.registerCustomer(this.CustomerRegister.value).subscribe(
      (data:SuccessEnquiry)=>
        {
          this.message=data.message
        }
     );
     alert('Registration Successful!')
    }
  }

}
