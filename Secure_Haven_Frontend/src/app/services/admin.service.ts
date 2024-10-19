import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanDisbursement } from '../model/loan-disbursement';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private  http:HttpClient) { }

  getAllInquiries()
  {
    return this.http.get("http://localhost:9095/get_enquiries")
  }

  getAllLoanApplication()
  {
    return this.http.get("http://localhost:9095/get_loan_application")
  }

  sendInquiryId(id:number[])
  {
    return this.http.post("http://localhost:9095/save_inquiryid",id)
  }

  sendApplicationId(id:number[])
  {
    return this.http.post("http://localhost:9095/save_applicationid",id)
  }

  getForwardedInquiries()
  {
    return this.http.get("http://localhost:9095/forward_inquiry")
  }

  getForwardedloanapp()
  {
    return this.http.get("http://localhost:9095/forward_loan_application")
  }

  getCustomerLoanData(id:any)
  {
    return this.http.get("http://localhost:9092/get_single_loan_app/"+id)
  }

  checkCibil()
  {
    return this.http.get("http://localhost:9098/get_cibil")
  }

  verifyDocuments()
  {
    return this.http.get("http://localhost:9098/verify_docx")
  }

  saveAcceptedApplication(app_id:string, cibilStatus:string, cibilScore:number)
  {

    const params = new HttpParams()
    .set('app_id', app_id)
    .set('cibilStatus', cibilStatus)
    .set('cibilScore', cibilScore)

    return this.http.post("http://localhost:9098/save_accepted_app", {}, {params})
  }

  getCustomerLoanForCM()
  {
    return this.http.get("http://localhost:9099/get_accepted_loan_app");
  }

  sendSanctionMail(formData:any)
  {
    return this.http.post("http://localhost:9099/send_sanctioned_Email",formData);
  }

  saveSanctionDetails(data:any)
  {
    return this.http.post("http://localhost:9099/save_sanction_details",data);
  }

  getAhData()
  {
    return this.http.get("http://localhost:5555/get_sanction_loan_details")
  }

  getsinglesanction(app_id:any)
  {
    return this.http.get('http://localhost:5555/get_sanction_details/'+app_id)
    
  }

  saveDesbursementDetails(data:LoanDisbursement)
  {
    return this.http.post('http://localhost:5555/save_disburse_details',data)
  }
}
