import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfessionComponent } from './customer-profession.component';

describe('CustomerProfessionComponent', () => {
  let component: CustomerProfessionComponent;
  let fixture: ComponentFixture<CustomerProfessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerProfessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
