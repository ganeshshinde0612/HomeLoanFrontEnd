import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerLoanComponent } from './view-customer-loan.component';

describe('ViewCustomerLoanComponent', () => {
  let component: ViewCustomerLoanComponent;
  let fixture: ComponentFixture<ViewCustomerLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCustomerLoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCustomerLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
