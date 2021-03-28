import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteItemDetailsComponent } from './quote-item-details.component';

describe('QuoteItemDetailsComponent', () => {
  let component: QuoteItemDetailsComponent;
  let fixture: ComponentFixture<QuoteItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
