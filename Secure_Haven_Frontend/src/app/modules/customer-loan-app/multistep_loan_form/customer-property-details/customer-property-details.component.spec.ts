import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPropertyDetailsComponent } from './customer-property-details.component';

describe('CustomerPropertyDetailsComponent', () => {
  let component: CustomerPropertyDetailsComponent;
  let fixture: ComponentFixture<CustomerPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerPropertyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
