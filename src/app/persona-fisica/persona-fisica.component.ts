import { Component, OnInit } from '@angular/core';
import { PersonaFisicaService } from './persona-fisica.service';
import { PersonaFisicaModel } from './../model/personaFisica.model';

@Component({
  selector: 'app-persona-fisica',
  templateUrl: './persona-fisica.component.html',
  styleUrls: ['./persona-fisica.component.css'],
  providers: [PersonaFisicaService]
})
export class PersonaFisicaComponent implements OnInit {

  private personasFisicas: Array<PersonaFisicaModel>;
  constructor(private personaFisicaService: PersonaFisicaService) { }

  ngOnInit() {
    this.loadPersonasFisicas();
  }

  private loadPersonasFisicas(): void {
    this.personaFisicaService.getPersonasFisicas().subscribe(res => {
      this.personasFisicas = res;
    });
  }

}
