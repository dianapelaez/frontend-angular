import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { PersonaFisicaModel } from './../model/personaFisica.model';
import { CreatePersonaFisicaService } from './create-persona-fisica.service';
import { OK } from '../model/httpStatus';

@Component({
  selector: 'app-create-persona-fisica',
  templateUrl: './create-persona-fisica.component.html',
  styleUrls: ['./create-persona-fisica.component.css'],
  providers: [CreatePersonaFisicaService]
})
export class CreatePersonaFisicaComponent implements OnInit {
  
  private personaFisica: PersonaFisicaModel;
  private isValid: Boolean = true;
  private message: String = '';

  constructor(private createPersonaFisicaService: CreatePersonaFisicaService, private router: Router) { 
    this.personaFisica = new PersonaFisicaModel();
  }

  ngOnInit() {
  }

  public saveOrUpdate(): void {
    this.isValid = this.createPersonaFisicaService.validate(this.personaFisica);

    if (this.isValid){
       this.createPersonaFisicaService.saveOrUpdate(this.personaFisica).subscribe(res => {
         if (res.responseCode === OK) {
            this.router.navigate(['/personaFisicaComponent']);
         } else {
            this.message = res.message;
            this.isValid = false;
         }
       });
    } else {
      this.message = 'Los campos con * son obligatorios';
    }
  }

}
