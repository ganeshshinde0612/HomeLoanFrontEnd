import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OeLoanDetailsComponent } from './oe-loan-details.component';

describe('OeLoanDetailsComponent', () => {
  let component: OeLoanDetailsComponent;
  let fixture: ComponentFixture<OeLoanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OeLoanDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OeLoanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
