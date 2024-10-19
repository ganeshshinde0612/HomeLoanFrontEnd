import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { CustomerLoanApplication } from '../../../model/customer-loan-application';

@Component({
  selector: 'app-loan-details-table',
  templateUrl: './loan-details-table.component.html',
  styleUrl: './loan-details-table.component.css'
})
export class LoanDetailsTableComponent implements OnInit{

  constructor(private adminservice:AdminService)
  {

  }

  allLoanApplication:CustomerLoanApplication[]

  ngOnInit(): void {
    
    this.adminservice.getAllLoanApplication().subscribe(
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

}
