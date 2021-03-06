import { PersonaJuridicaModel } from '../model/personaJuridica.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaJuridicaService {

  private personasJuridicas:  Array<PersonaJuridicaModel>;

  constructor(private http: HttpClient) { }

  public getPersonasJuridicas(): Observable<PersonaJuridicaModel[]>{
      return this.http.get<PersonaJuridicaModel[]>('http://localhost:8000/api/personajuridica');
  }

  public delete(personaJuridica: PersonaJuridicaModel): void{
    this.http.post('http://localhost:8000/api/personajuridica', JSON.stringify(personaJuridica)).subscribe();
    this.getPersonasJuridicas();
  }

}
