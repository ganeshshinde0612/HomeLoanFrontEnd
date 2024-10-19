import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsTableComponent } from './loan-details-table.component';

describe('LoanDetailsTableComponent', () => {
  let component: LoanDetailsTableComponent;
  let fixture: ComponentFixture<LoanDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanDetailsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
