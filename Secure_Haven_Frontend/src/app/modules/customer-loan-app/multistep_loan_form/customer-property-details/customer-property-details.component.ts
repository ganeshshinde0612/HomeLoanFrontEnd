import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanAppService } from '../../../../services/loan-app.service';

@Component({
  selector: 'app-customer-property-details',
  templateUrl: './customer-property-details.component.html',
  styleUrl: './customer-property-details.component.css'
})
export class CustomerPropertyDetailsComponent {

  constructor(private fb:FormBuilder, private loanservice:LoanAppService){ }
  propertydetails:FormGroup

  ngOnInit(): void {
    this.propertydetails=this.fb.group(
      {
        id:[],
        propertyType:['',Validators.required],
        propertyArea:['',Validators.required],
        constructionArea:['',Validators.required],
        propertyPrice:['',Validators.required],
        propertyAddress:['',Validators.required]
      }
    )
  }
  onSubmit(){
    let app_id=localStorage.getItem("app_id")
    this.loanservice.savePropertyDetails(this.propertydetails.value,app_id).subscribe()
  }

}
