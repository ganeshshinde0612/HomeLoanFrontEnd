import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { CustomerLoanApplication } from '../../../model/customer-loan-application';

@Component({
  selector: 'app-admin-cm',
  templateUrl: './admin-cm.component.html',
  styleUrl: './admin-cm.component.css'
})
export class AdminCmComponent implements OnInit{

constructor(private adminservice:AdminService)
{

}

  ngOnInit(): void {
     
    this.getData();
  }


  allLoanApplication:CustomerLoanApplication[]
  getData()
  {
    this.adminservice.getCustomerLoanForCM().subscribe(
      (data:CustomerLoanApplication[])=>
        {
            this.allLoanApplication=data
        }
    )
  }

  loandata:boolean=false
  viewDetails(id:any)
    {
      localStorage.setItem("viewdetails",id)
      this.loandata=true
    }
}
