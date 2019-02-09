import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaFisicaComponent } from './persona-fisica/persona-fisica.component';
import { CreatePersonaFisicaComponent } from './create-persona-fisica/create-persona-fisica.component';
import { PersonaJuridicaComponent } from './persona-juridica/persona-juridica.component';

const routes: Routes = [
  {path: '', redirectTo: '/personaFisicaComponent', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent},
  {path: 'personaFisicaComponent', component: PersonaFisicaComponent},
  {path: 'createPersonaFisicaComponent', component: CreatePersonaFisicaComponent},
  {path: 'personaJuridicaComponent', component: PersonaJuridicaComponent},

 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
