import { Component, OnInit } from '@angular/core';
import { CustomerEnquiry } from '../../../model/customer-enquiry';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-oe',
  templateUrl: './admin-oe.component.html',
  styleUrl: './admin-oe.component.css'
})
export class AdminOeComponent implements OnInit{
  constructor(private adminservice: AdminService) {

  }

  allInquiries: CustomerEnquiry[]

  ngOnInit(): void {
    this.adminservice.getForwardedInquiries().subscribe(

      (data: CustomerEnquiry[]) => {
        this.allInquiries = data
      }
    )
  }

  selectedItems: number[] = [];
  alert:boolean=true


  toggleSelection(id: number) {
    const index = this.selectedItems.indexOf(id);
    if (index === -1) {
      this.selectedItems.push(id);
    } else {
      this.selectedItems.splice(index, 1);
      
    }
  }
   

    sendInquiryId() {
     console.log(this.selectedItems)

     this.adminservice.sendInquiryId(this.selectedItems).subscribe();
     this.alert=false
    }

}
