import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { CreatePersonaJuridicaService } from './create-persona-juridica.service';
import { OK } from '../model/httpStatus';
import { PersonaJuridicaModel } from './../model/personaJuridica.model';

@Component({
  selector: 'app-create-persona-juridica',
  templateUrl: './create-persona-juridica.component.html',
  styleUrls: ['./create-persona-juridica.component.css'],
  providers: [CreatePersonaJuridicaService]
})

export class CreatePersonaJuridicaComponent implements OnInit {

  private personaJuridica: PersonaJuridicaModel;
  private isValid: Boolean = true;
  private message: String = '';

  constructor(private createPersonaJuridicaService: CreatePersonaJuridicaService,
    private router: Router) {
    if (sessionStorage.getItem('personaFisica')){
      this.personaJuridica = JSON.parse(sessionStorage.getItem('personaFisica'));
    }
    this.personaJuridica = new PersonaJuridicaModel();
  }

  ngOnInit() {
  }

  public saveOrUpdate(): void {
    this.isValid = this.createPersonaJuridicaService.validate(this.personaJuridica);

    if (this.isValid){
       this.createPersonaJuridicaService.saveOrUpdate(this.personaJuridica).subscribe(res => {
         if (res.responseCode === OK) {
            this.router.navigate(['/personaJuridicaComponent']);
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
