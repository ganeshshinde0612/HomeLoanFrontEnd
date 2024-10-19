import { Component } from '@angular/core';
import { CustomerLoanApplication } from '../../../model/customer-loan-application';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-ah',
  templateUrl: './admin-ah.component.html',
  styleUrl: './admin-ah.component.css'
})
export class AdminAhComponent {

  constructor(private adminservice:AdminService)
{

}

  ngOnInit(): void {
     
    this.getData();
  }


  allLoanApplication:CustomerLoanApplication[]
  getData()
  {
    this.adminservice.getAhData().subscribe(
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
      
    }

}
