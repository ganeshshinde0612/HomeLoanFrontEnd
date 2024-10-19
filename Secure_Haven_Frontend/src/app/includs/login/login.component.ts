import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { SuccessEnquiry } from '../../model/success-enquiry';
import { HttpClient } from '@angular/common/http';
import { Exceptions } from '../../model/exceptions';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private fb:FormBuilder, private loginservice:LoginService, private router:Router){ }
  loginForm:FormGroup
 
  ngOnInit(): void {
    this.loginForm=this.fb.group(
      {
        username:[],
        password:[]
      }
    )
  }

  message:string
  onSubmit(){

    let username=this.loginForm.controls['username'].value;
    let password=this.loginForm.controls['password'].value;


    if(username === "crm" && password === "crm@123")
      {
        this.router.navigateByUrl("/adminmodule/successlogin")
        localStorage.setItem("userType","crm")
        localStorage.setItem("type", "Customer Relationship Manager")
      
      }
      else if(username === "oe" && password === "oe@123")
        {
          this.router.navigateByUrl("/adminmodule/successlogin")
          localStorage.setItem("userType","oe")

          localStorage.setItem("type", "Operational Excecutive")
          
        }

        else if(username === "cm" && password === "cm@123")
          {
            this.router.navigateByUrl("/adminmodule/successlogin")
            localStorage.setItem("userType","cm")

            localStorage.setItem("type", "Credit Manager")
            
          }

          else if(username === "ah" && password === "ah@123")
            {
              this.router.navigateByUrl("/adminmodule/successlogin")
              localStorage.setItem("userType","ah")

              localStorage.setItem("type", "Account Head")
              
            }

      else{

        let id:number
        this.loginservice.loginCustomer(username,password).subscribe(
          (data:SuccessEnquiry)=>
            {
              id=data.id
              this.router.navigateByUrl("/loanmodule/successlogin/"+id)
            },
    
            (errormsg)=>
              {
                Swal.fire(errormsg.error.msg);         
              }
    
        )

      }
   
  }

  hideLogin:boolean=false
  hideRegister:boolean=true

  openRegisterForm(){
    this.hideLogin=true
    this.hideRegister=false
  }

}
