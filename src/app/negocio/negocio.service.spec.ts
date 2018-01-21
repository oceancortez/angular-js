import { TestBed, inject } from '@angular/core/testing';

import { NegocioService } from './negocio.service';

describe('NegocioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NegocioService]
    });
  });

  it('should be created', inject([NegocioService], (service: NegocioService) => {
    expect(service).toBeTruthy();
  }));
});
