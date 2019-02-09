import { TestBed, inject } from '@angular/core/testing';

import { CreatePersonaFisicaService } from './create-persona-fisica.service';

describe('CreatePersonaFisicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatePersonaFisicaService]
    });
  });

  it('should be created', inject([CreatePersonaFisicaService], (service: CreatePersonaFisicaService) => {
    expect(service).toBeTruthy();
  }));
});
