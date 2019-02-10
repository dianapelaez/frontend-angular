import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PersonaFisicaModel } from './../model/personaFisica.model';
import { RestResponse } from './../model/RestResponse';


@Injectable({
  providedIn: 'root'
})
export class CreatePersonaFisicaService {

  constructor(private http: HttpClient) { }

  /*
  * Método que valida campos obligatorios
  * @param personaFisica
  */
  public validate(personaFisica: PersonaFisicaModel): boolean {
    let isValid = true;

    if (!personaFisica.dni) {
      isValid = false;
    }

    if (!personaFisica.nombre) {
      isValid = false;
    }

    if (!personaFisica.apellido) {
      isValid = false;
    }

    if (!personaFisica.cuit) {
      isValid = false;
    }
    return isValid;
  }

  public saveOrUpdate(personaFisica: PersonaFisicaModel): Observable<RestResponse>{
     return this.http.post<RestResponse>('http://localhost:8000/api/personafisica', JSON.stringify(personaFisica));
  }

}
