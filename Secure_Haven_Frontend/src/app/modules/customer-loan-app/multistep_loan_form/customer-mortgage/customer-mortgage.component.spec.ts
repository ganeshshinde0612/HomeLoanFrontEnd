import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMortgageComponent } from './customer-mortgage.component';

describe('CustomerMortgageComponent', () => {
  let component: CustomerMortgageComponent;
  let fixture: ComponentFixture<CustomerMortgageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerMortgageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerMortgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
