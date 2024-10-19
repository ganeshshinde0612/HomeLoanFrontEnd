import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEducationComponent } from './customer-education.component';

describe('CustomerEducationComponent', () => {
  let component: CustomerEducationComponent;
  let fixture: ComponentFixture<CustomerEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerEducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
