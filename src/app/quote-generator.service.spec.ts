import { TestBed, inject } from '@angular/core/testing';

import { QuoteGeneratorService } from './quote-generator.service';

describe('QuoteGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteGeneratorService]
    });
  });

  it('should be created', inject([QuoteGeneratorService], (service: QuoteGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
