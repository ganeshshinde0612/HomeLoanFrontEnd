import { Component, NgZoneOptions, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerEnquiry } from '../../../model/customer-enquiry';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admin-crm',
  templateUrl: './admin-crm.component.html',
  styleUrl: './admin-crm.component.css',
  // encapsulation: ViewEncapsulation.Emulated
})
export class AdminCrmComponent implements OnInit {


  constructor(private adminservice: AdminService) {

  }

  allInquiries: CustomerEnquiry[]

  ngOnInit(): void {
    this.adminservice.getAllInquiries().subscribe(

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