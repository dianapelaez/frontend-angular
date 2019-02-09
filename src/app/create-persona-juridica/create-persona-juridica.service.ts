import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PersonaJuridicaModel } from './../model/personaJuridica.model';
import { RestResponse } from './../model/RestResponse';

@Injectable({
  providedIn: 'root'
})
export class CreatePersonaJuridicaService {

  constructor(private http: HttpClient) { }

  /*
  * Método que valida campos obligatorios
  * @param personaJuridica
  */
  public validate(personaJuridica: PersonaJuridicaModel): boolean {
    let isValid = true;

    if (!personaJuridica.razonSocial) {
      isValid = false;
    }

    if (!personaJuridica.fundacion) {
      isValid = false;
    }

    if (!personaJuridica.cuit) {
      isValid = false;
    }
    return isValid;
  }

  public saveOrUpdate(personaJuridica: PersonaJuridicaModel): Observable<RestResponse>{
     return this.http.post<RestResponse>('http://localhost:8080/saveOrUpdate', JSON.stringify(personaJuridica));
  }
}
