import { ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chart } from 'chart.js/auto';
import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-emi-cal',
  templateUrl: './emi-cal.component.html',
  styleUrl: './emi-cal.component.css'
})
export class EmiCalComponent  implements OnInit , OnChanges{

  constructor(private fb:FormBuilder)
  {

  }

  emiCalculatorForm:FormGroup

  ngOnInit(): void {
    this.emiCalculatorForm=this.fb.group(
      {
        loanAmount:[],
        interestRate:[],
        loanTenure:[]
      }
    )

    if(this.emiCalculatorForm.controls['loanAmount'].value != null)
      {
        this.calculateEmi();
      }
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.calculateEmi()
  }
  
  emi:number
  totalAmount:number
  totalInterest:number
  hide:boolean=true

  chart: any;

  loanAmountValue: number = 2500000;
  updateLoanAmount() {
    this.emiCalculatorForm.patchValue({
      loanAmount: this.loanAmountValue
    });
  }

  interestValue: number=8;

  updateInterestRate() {
    this.emiCalculatorForm.patchValue({
      interestRate: this.interestValue
    });
  }

  loanTenureValue:number=12;
  updateLoanTenure()
  {
    this.emiCalculatorForm.patchValue({
      loanTenure: this.loanTenureValue
    });
  }

  calculateEmi()
  {
    
    let la:number=this.emiCalculatorForm.controls['loanAmount'].value
    let ir:number=this.emiCalculatorForm.controls['interestRate'].value
    let lt:number=this.emiCalculatorForm.controls['loanTenure'].value

    // this.emi = (la * ir * Math.pow((1 + ir), lt)) / (Math.pow((1 + ir), lt) - 1);

    // this.totalAmount = this.emi * lt;

    // this.totalInterest = this.totalAmount - la;
   

    const monthlyInterestRate = ir / 12 / 100;
    const emiFactor = Math.pow(1 + monthlyInterestRate, lt);
    this.emi = (la * monthlyInterestRate * emiFactor) / (emiFactor - 1);
    this.totalAmount = this.emi * lt;
    this.totalInterest = this.totalAmount - la;
    this.hide=false

    // this.cb.detectChanges();
    this.renderChart(la, this.totalInterest);
  }

  renderChart(loanAmount: number, interestRate: number) {
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        labels: ['Loan Amount', 'Interest Rate'],
        datasets: [
          {
            data: [loanAmount, interestRate],
            backgroundColor: ['orange', '#36A2EB'],
            hoverBackgroundColor: ['#90EE90', '#36A2EB']
          }
        ]
      },
      
    });
  }
}