import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmLoanDetailsComponent } from './cm-loan-details.component';

describe('CmLoanDetailsComponent', () => {
  let component: CmLoanDetailsComponent;
  let fixture: ComponentFixture<CmLoanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmLoanDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
