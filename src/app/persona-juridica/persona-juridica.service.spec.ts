import { TestBed, inject } from '@angular/core/testing';

import { PersonaJuridicaService } from './persona-juridica.service';

describe('PersonaJuridicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaJuridicaService]
    });
  });

  it('should be created', inject([PersonaJuridicaService], (service: PersonaJuridicaService) => {
    expect(service).toBeTruthy();
  }));
});
