import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoanAppService } from '../../../services/loan-app.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerLoanApplication } from '../../../model/customer-loan-application';
import { SanctionLetter } from '../../../model/sanction-letter';
import { LoanDisbursement } from '../../../model/loan-disbursement';
import jsPDF from 'jspdf';
import { SanctionData } from '../../../model/sanction-data';
import Swal from 'sweetalert2';
import { SuccessEnquiry } from '../../../model/success-enquiry';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private loanservice: LoanAppService, private activateroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getData()
  }



  customerData: CustomerLoanApplication

  id: any
  getData() {

    this.activateroute.paramMap.subscribe(
      param => {
        this.id = param.get("id")

        this.loanservice.getSingleApplicant(this.id).subscribe(
          (data: CustomerLoanApplication) => {
            this.customerData = data

          }
        )
      }
    )
  }

  sanctionDetails: SanctionData
  disbursementDetails: LoanDisbursement
  message: string


  // app_id: any = 29191310

  rows: any

  date: Date

  checkStatus() {
    this.loanservice.checkLoanStatusSanction(this.customerData.id).subscribe(
      (data: SanctionData) => {
        this.sanctionDetails = data
        console.log(data)

        this.foo(this.sanctionDetails.sactionDate)
        // this.date=this.parseDateString(this.sanctionDetails.sactionDate)
        // console.log(this.date)
        // const formdate= this.formatDate(this.sanctionDetails.sactionDate.toString())
        // const formdate=this.parseDateString(this.sanctionDetails.sactionDate.toString())
        // console.log(formdate)

        // this.generateMonthlyDates(this.sanctionDetails.sactionDate, this.sanctionDetails.loanTenure)

        //  this.rows = new Array(this.sanctionDetails.loanTenure);

      }
    )
    // this.checkStatus2()
  }

  checkStatus2() {

    this.loanservice.checkLoanStatusLoanDisburse(this.customerData.id).subscribe(
      (data: LoanDisbursement) => {
        this.disbursementDetails = data
      }
    )


  }

  @ViewChild('content', { static: true }) el!: ElementRef;

  generatePDF() {
    let pdf = new jsPDF('l', 'pt', 'a2');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("Sanction_Letter.pdf");
      }
    })
  }


  // Ledger Management






  formatDate(dateString: string): string {
    const [datePart] = dateString.split(' '); // Extracting only the date part
    const [year, month, day] = datePart.split('-');
    return `${day} ${month} ${year}`;
  }
  parseDateString(dateString: string): Date {
    // Split the string into its components
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-');
    const [hour, minute, second] = timePart.split(':');
    const millisecond = timePart.split('.')[1];

    // Create a new Date object with the parsed components
    return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second), Number(millisecond));
    // console.log(date)
    // this.generateMonthlyDates(date, this.sanctionDetails.loanTenure)
    // return date;


  }

  monthlyDates: Date[] = [];

  foo(date: string) {
    const parts = date.split(" "); // Split the string by space
    const day = parseInt(parts[0]); // Parse day
    const month = parseInt(parts[1]) - 1; // Parse month (Note: January is 0 in JavaScript)
    const year = parseInt(parts[2]) + 2000; // Parse year (assuming it's in "yy" format)

    const startDate = new Date(year, month, day); // Create Date object
    console.log("start"+startDate)

    this.generateMonthlyDates(startDate, this.sanctionDetails.loanTenure)
  }
  
  generateMonthlyDates(startDate: Date, numberOfMonths: number) {


    // // const monthlyDates: Date[] = [];
    // const startMonth = startDate.getMonth() // Get the starting month
    // const startYear = startDate.getFullYear(); // Get the starting year

    // for (let i = 0; i < numberOfMonths; i++) {
    //   // Calculate the month and year for each date
    //   const month = (startMonth + i) % 12;
    //   const year = startYear + Math.floor((startMonth + i) / 12);

    //   // Create a new Date object with the calculated month and year
    //   const date = new Date(year, month);
    //   console.log(date)
    //   this.monthlyDates.push(date);
    // }

    

    // let currentDate = new Date(startDate); // Create a copy of the start date
    // console.log("Generating dates starting from: " + currentDate.toDateString());

    // for (let i = 0; i < numberOfMonths; i++) {
    //     const month = currentDate.getMonth(); // Get the month of the current date
    //     const year = currentDate.getFullYear(); // Get the year of the current date

    //     // Create a new Date object with the current month and year
    //     const date = new Date(year, month);
    //     console.log(date.toDateString()); // Log each generated date
    //     this.monthlyDates.push(date);

    //     // Move to the next month
    //     currentDate.setMonth(month + 1);
    // }



    let currentDate = new Date(startDate); // Create a copy of the start date
    console.log("Generating dates starting from: " + currentDate.toDateString());

    for (let i = 0; i < numberOfMonths; i++) {
        const day = startDate.getDate(); // Get the day of the start date
        const month = currentDate.getMonth(); // Get the month of the current date
        const year = currentDate.getFullYear(); // Get the year of the current date

        // Create a new Date object with the current month, year, and start date's day
        const date = new Date(year, month, day);
        console.log(date.toDateString()); // Log each generated date
        this.monthlyDates.push(date);

        // Move to the next month
        currentDate.setMonth(month + 1);
    }
  }


  OTP:any
  doPayment()
  {
    Swal.fire({
      html: `
       Enter Amount to Pay
      `,
      input: "text",
      inputPlaceholder: "Enter the amount here...",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        Ok
      `,
      preConfirm: (amount) => {
        if (!amount) {
          Swal.showValidationMessage('You need to enter an amount to pay');
          return false;
        }
        return amount;
      }
    }).then((result) => {
      if (result.isConfirmed) {

        this.loanservice.getPaymentOTPFromBank(this.customerData.email).subscribe(
          (data:SuccessEnquiry)=>
            {
              this.OTP=data.id
              console.log(this.OTP)
            }
            
        )
        this.openOtpModal(result.value); // Pass the amount to the OTP modal
      }
    });
    };

    openOtpModal(amount) {
      Swal.fire({
        html: `Enter OTP for amount: ${amount}`,
        input: 'text',
        inputPlaceholder: 'Enter the OTP here...',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Pay
        `,
        confirmButtonAriaLabel: 'Thumbs up, pay!',
        cancelButtonText: `
          Cancel
        `,
        customClass: {
          title: 'small-font' // Apply the custom class to the title
        },
        preConfirm: (otp) => {
          if (!otp) {
            Swal.showValidationMessage('You need to enter the OTP');
            // return false;
          }
          else if(otp != this.OTP)
            {
              Swal.showValidationMessage('You need to enter the correct OTP');
            // return false;
            }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Logic after OTP confirmation (e.g., process the payment)
          Swal.fire('Payment Successful', `Your payment of ${amount} was successful!`, 'success');
        }
      });
  }

 
}

