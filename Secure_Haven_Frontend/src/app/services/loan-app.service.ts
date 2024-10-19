import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerInfo } from '../model/customer-info';
import { CustomerFamilyDetails } from '../model/customer-family-details';
import { CustomerAddress } from '../model/customer-address';
import { EducationalDetails } from '../model/educational-details';
import { CustomerProfession } from '../model/customer-profession';
import { CustomerMortgage } from '../model/customer-mortgage';
import { CustomerAccountDetails } from '../model/customer-account-details';
import { CustomerPreviousLoan } from '../model/customer-previous-loan';
import { CustomerPropertyDetails } from '../model/customer-property-details';

@Injectable({
  providedIn: 'root'
})
export class LoanAppService {

  constructor(private http:HttpClient) { }

  getCustomerRegistrationData(id:any)
  {
    return this.http.get("http://localhost:9092/getCustomerLogin/"+id)
  }

  saveCustomerInfo(data:CustomerInfo)
  {
    return this.http.post("http://localhost:9092/save_customer_info",data)
  }

  saveFamilyDetails(data:CustomerFamilyDetails,app_id:string)
  {
    return this.http.post("http://localhost:9092/save_family_details/"+app_id, data)
  }

  saveCustomerAddress(data:CustomerAddress,app_id:string)
  {
    return this.http.post("http://localhost:9092/save_customer_address/"+app_id, data)

  }

  saveCustomerEducation(data:EducationalDetails,app_id:string)
  {
    return this.http.post("http://localhost:9092/save_customer_education/"+app_id, data)

  }

  saveCustomerProfession(data:CustomerProfession,app_id:string)
  {
    return this.http.post("http://localhost:9092/save_customer_profession/"+app_id, data)
  }

  saveCustomerMortgage(data:CustomerMortgage,app_id:string)
  {
    return this.http.post("http://localhost:9092/save_customer_mortgage/"+app_id, data)
  }

  saveCustomerAccount(data:CustomerAccountDetails,app_id:string)
  {
    return this.http.post("http://localhost:9092/save_customer_account/"+app_id, data)
  }

  savePreviousLoan(data:CustomerPreviousLoan,app_id:string)
  {
    return this.http.post("http://localhost:9092/save_customer_previous_loan/"+app_id, data)
  }

  savePropertyDetails(data:CustomerPropertyDetails,app_id:string)
  {
    return this.http.post("http://localhost:9092/save_customer_property/"+app_id, data)
  }

  saveCustomerDocuments(data:any,app_id:string)
  {
    return this.http.post("http://localhost:9092/save_customer_docx/"+app_id, data)
  }

  getCustomerApplicationId(email:string)
  {
    return this.http.get("http://localhost:9092/get_appid/"+email)
  }

  getSingleApplicant(app_id:string)
  {
    return this.http.get("http://localhost:9092/get_single_loan_app/"+app_id)
  }

  checkLoanStatusSanction(app_id:any)
  {
    return this.http.get('http://localhost:9092/check_loan_staus/'+app_id)
  }

  checkLoanStatusLoanDisburse(app_id:any)
  {
    return this.http.get('http://localhost:9092/check_loan_staus1/'+app_id)
  }

  getPaymentOTPFromBank(id:any)
  {
    return this.http.get('http://localhost:9092/requiredOTP/'+id)
  }
}
