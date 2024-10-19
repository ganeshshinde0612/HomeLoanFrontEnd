import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFamilyDetailsComponent } from './customer-family-details.component';

describe('CustomerFamilyDetailsComponent', () => {
  let component: CustomerFamilyDetailsComponent;
  let fixture: ComponentFixture<CustomerFamilyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerFamilyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerFamilyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
