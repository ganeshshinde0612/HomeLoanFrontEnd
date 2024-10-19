import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { CustomerLoanApplication } from '../../../model/customer-loan-application';

@Component({
  selector: 'app-oe-loan-details',
  templateUrl: './oe-loan-details.component.html',
  styleUrl: './oe-loan-details.component.css'
})
export class OeLoanDetailsComponent implements OnInit{

  constructor(private adminservice:AdminService)
  {

  }

  allLoanApplication:CustomerLoanApplication[]

  ngOnInit(): void {
    
    this.adminservice.getForwardedloanapp().subscribe(
      (data:CustomerLoanApplication[])=>
        {
          this.allLoanApplication=data
          console.log(data)
        }
    )
  }

  selectedItems: number[] = [];

  toggleSelection(id: number) {
    const index = this.selectedItems.indexOf(id);
    if (index === -1) {
      this.selectedItems.push(id);
    } else {
      this.selectedItems.splice(index, 1);
    }
  }
   

  alert:boolean=true
    sendInquiryId() {
     console.log(this.selectedItems)

     this.adminservice.sendApplicationId(this.selectedItems).subscribe()
     this.alert=false
    }


    loandata:boolean=false
    viewDetails(id:any)
    {
      localStorage.setItem("viewdetails",id)
      this.loandata=true
    }
}
