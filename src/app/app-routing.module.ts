import { AppComponent } from './app.component';
import { PersonaFisicaComponent } from './persona-fisica/persona-fisica.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: '/personaFisicaComponent', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent},
  {path: 'personaFisicaComponent', component: PersonaFisicaComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
