import { PersonaFisicaModel } from '../model/personaFisica.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaFisicaService {

  private personasFisicas:  Array<PersonaFisicaModel>;

  constructor(private http: HttpClient) { }

  public getPersonasFisicas(): Observable<PersonaFisicaModel[]>{
      return this.http.get<PersonaFisicaModel[]>('http://localhost:8080/getPersonasFisicas');
  }

  public delete(personaFisica: PersonaFisicaModel): void{
    this.http.post('http://localhost:8080/deletePersonaFisica', JSON.stringify(personaFisica)).subscribe();
  }
}
