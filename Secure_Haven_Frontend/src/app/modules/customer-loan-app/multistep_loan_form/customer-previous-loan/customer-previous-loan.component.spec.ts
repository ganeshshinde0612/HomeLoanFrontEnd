import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPreviousLoanComponent } from './customer-previous-loan.component';

describe('CustomerPreviousLoanComponent', () => {
  let component: CustomerPreviousLoanComponent;
  let fixture: ComponentFixture<CustomerPreviousLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerPreviousLoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerPreviousLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
