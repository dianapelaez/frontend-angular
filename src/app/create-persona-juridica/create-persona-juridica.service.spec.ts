import { TestBed, inject } from '@angular/core/testing';

import { CreatePersonaJuridicaService } from './create-persona-juridica.service';

describe('CreatePersonaJuridicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatePersonaJuridicaService]
    });
  });

  it('should be created', inject([CreatePersonaJuridicaService], (service: CreatePersonaJuridicaService) => {
    expect(service).toBeTruthy();
  }));
});
