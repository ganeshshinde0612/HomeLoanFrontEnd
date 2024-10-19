import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanAppService } from '../../../../services/loan-app.service';

@Component({
  selector: 'app-customer-profession',
  templateUrl: './customer-profession.component.html',
  styleUrl: './customer-profession.component.css'
})
export class CustomerProfessionComponent {

  constructor(private fb:FormBuilder, private loanservice:LoanAppService){ }
    customerproffession:FormGroup

    ngOnInit(): void {
      this.customerproffession=this.fb.group(
        {
          id:[],
          professionType:['',Validators.required],
          salary:['',Validators.required],
          workingPeriod:['',Validators.required],
          designation:['',Validators.required]
        }
      )
    }
    onSubmit(){
      let app_id=localStorage.getItem("app_id")
      this.loanservice.saveCustomerProfession(this.customerproffession.value,app_id).subscribe()
      
    }

}
