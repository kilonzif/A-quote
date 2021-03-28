import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAppComponent } from './quotes-app.component';

describe('QuotesAppComponent', () => {
  let component: QuotesAppComponent;
  let fixture: ComponentFixture<QuotesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
