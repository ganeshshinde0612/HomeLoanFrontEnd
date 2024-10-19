import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoanAppService } from '../../../../services/loan-app.service';
import { CustomerLoanApplication } from '../../../../model/customer-loan-application';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-customer-documents',
  templateUrl: './customer-documents.component.html',
  styleUrl: './customer-documents.component.css'
})
export class CustomerDocumentsComponent {

  constructor(private loanservice: LoanAppService) {

  }

  pancard: any
  onPancard(event: any) {
    this.pancard = event.target.files[0]

  }

  aadharcard: any
  onAadhar(event: any) {
    this.aadharcard = event.target.files[0]
  }

  salarySlip: any
  onSalarySlip(event: any) {
    this.salarySlip = event.target.files[0]
  }

  incomeTax: any
  onIncomeTax(event: any) {
    this.incomeTax = event.target.files[0]
  }

  photo: any
  onPhoto(event: any) {
    this.photo = event.target.files[0]
  }

  signature: any
  onSignature(event: any) {
    this.signature = event.target.files[0]
  }

  propertyproof: any
  onPropertyProof(event: any) {
    this.propertyproof = event.target.files[0]
  }


  hidebtn:boolean=true
  onSubmit() {
    // alert('document')
    let formData: FormData = new FormData()
    formData.append("pancard", this.pancard)
    formData.append("aadhar", this.aadharcard)
    formData.append("salaryslips", this.salarySlip)
    formData.append("incometax", this.incomeTax)
    formData.append("photo", this.photo)
    formData.append("signature", this.signature)
    formData.append("propertyproof", this.propertyproof)

    let app_id = localStorage.getItem("app_id")
    this.loanservice.saveCustomerDocuments(formData, app_id).subscribe();

    this.hidebtn=false
    this.makePdf(app_id); //
  }

  customerData: CustomerLoanApplication

  makePdf(app_id: any) //
  {
    // let app_id=29191310
    this.loanservice.getSingleApplicant(app_id).subscribe(
      (data: CustomerLoanApplication) => {
        this.customerData = data
      }
    )

    
  }
  // pdf genration start
  @ViewChild('content', { static: true }) el!: ElementRef;

  generatePDF() {
    let pdf = new jsPDF('l', 'pt', 'a2');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("CustomerLoanApplication.pdf");
      }
    })
  }

  //pdf generation end
}
