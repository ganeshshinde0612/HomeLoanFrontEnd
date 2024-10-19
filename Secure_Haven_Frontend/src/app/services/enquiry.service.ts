import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerEnquiry } from '../model/customer-enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }

  save_Enquiry(enquiry_Data:CustomerEnquiry)
  {
    return this.http.post("http://localhost:9090/customer/enquiry/save_enquiry",enquiry_Data)
  }
}
