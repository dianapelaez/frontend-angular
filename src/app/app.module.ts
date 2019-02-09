import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaFisicaComponent } from './persona-fisica/persona-fisica.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePersonaFisicaComponent } from './create-persona-fisica/create-persona-fisica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonaFisicaComponent,
    CreatePersonaFisicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }