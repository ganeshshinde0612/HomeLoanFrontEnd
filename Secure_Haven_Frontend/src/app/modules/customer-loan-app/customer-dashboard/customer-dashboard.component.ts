import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { LoanAppService } from '../../../services/loan-app.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerLogin } from '../../../model/customer-login';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent implements OnInit{

  constructor(private loanservice:LoanAppService, private activateroute:ActivatedRoute)
  {

  }


  customerData:CustomerLogin

  

  ngOnInit(): void {
    
    this.getCustomerRegistrationData()
    
  }

  getCustomerRegistrationData()
  {

    let id

    this.activateroute.paramMap.subscribe(
      map=>
        {
          id=map.get('data')
        }
    )

      localStorage.setItem("uid",id)
      this.loanservice.getCustomerRegistrationData(id).subscribe(
        (data:CustomerLogin)=>
          {
            this.customerData=data
          }
      )
  }

  applyForLoan()
  {
    document.getElementById("loanform").scrollIntoView({behavior:'smooth'})
  }
}
