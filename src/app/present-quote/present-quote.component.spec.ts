import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentQuoteComponent } from './present-quote.component';

describe('PresentQuoteComponent', () => {
  let component: PresentQuoteComponent;
  let fixture: ComponentFixture<PresentQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
