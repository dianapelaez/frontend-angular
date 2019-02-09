import { Component, OnInit } from '@angular/core';
import { PersonaFisicaService } from './persona-fisica.service';

@Component({
  selector: 'app-persona-fisica',
  templateUrl: './persona-fisica.component.html',
  styleUrls: ['./persona-fisica.component.css'],
  providers: [PersonaFisicaService]
})
export class PersonaFisicaComponent implements OnInit {

  constructor(private personaFisicaService: PersonaFisicaService) { }

  ngOnInit() {
  }

}
