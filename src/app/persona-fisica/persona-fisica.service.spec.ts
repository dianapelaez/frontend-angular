import { TestBed, inject } from '@angular/core/testing';

import { PersonaFisicaService } from './persona-fisica.service';

describe('PersonaFisicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaFisicaService]
    });
  });

  it('should be created', inject([PersonaFisicaService], (service: PersonaFisicaService) => {
    expect(service).toBeTruthy();
  }));
});
