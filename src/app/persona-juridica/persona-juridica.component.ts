import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonaJuridicaService } from './persona-juridica.service';
import { PersonaJuridicaModel } from './../model/personaJuridica.model';

@Component({
  selector: 'app-persona-juridica',
  templateUrl: './persona-juridica.component.html',
  styleUrls: ['./persona-juridica.component.css'],
  providers: [PersonaJuridicaService]
})
export class PersonaJuridicaComponent implements OnInit {

  private personasJuridicas: Array<PersonaJuridicaModel>;
  constructor(private personaFisicaService: PersonaJuridicaService, private router: Router) { }

  ngOnInit() {
    this.loadPersonasJuridicas();
  }

  private loadPersonasJuridicas(): void {
    this.personaFisicaService.getPersonasJuridicas().subscribe(res => {
      this.personasJuridicas = res;
    });
  }

  public edit(personaJuridica: PersonaJuridicaModel): void {
    sessionStorage.setItem('personaJuridica', JSON.stringify(personaJuridica));
    this.router.navigate(['/createPersonaJuridicaComponent']);
  }

  public delete(personaJuridica: PersonaJuridicaModel): void {
   this.personaFisicaService.delete(personaJuridica);
  }

}

