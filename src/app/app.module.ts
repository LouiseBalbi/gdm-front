import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthComponent} from './auth/auth.component';
import {TechComponent} from './tech/tech.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaisieNoteDeFraisComponent } from './frais/saisie-note-de-frais/saisie-note-de-frais.component';
import { SaisieNatureComponent } from './saisie-nature/saisie-nature.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AjoutNatureComponent } from './saisie-nature/ajout-nature/ajout-nature.component';
import { SupprimerNatureComponent } from './saisie-nature/supprimer-nature/supprimer-nature.component';
import { ModifierNatureComponent } from './saisie-nature/modifier-nature/modifier-nature.component';
import { GestionMissionComponent } from './pages/mission/gestion-mission/gestion-mission.component';
import { DemadeMissionComponent } from './pages/mission/demade-mission/demade-mission.component';
import { ModificationMissionComponent } from './pages/mission/modification-mission/modification-mission.component';


import { ValidationMissionComponent } from './pages/validation-mission/validation-mission.component';
import { PrimesComponent } from './pages/primes/primes.component';
import { GestionFraisComponent } from './frais/gestion-frais/gestion-frais.component';
import { NgxAutocomPlaceModule } from 'ngx-autocom-place';





@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TechComponent,
    SaisieNoteDeFraisComponent,
    SaisieNatureComponent,
    GestionMissionComponent,
    DemadeMissionComponent,
    ModificationMissionComponent,
    AjoutNatureComponent,
    SaisieNatureComponent,
    SupprimerNatureComponent,
    ModifierNatureComponent,
    ValidationMissionComponent,
    PrimesComponent,
    GestionFraisComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxAutocomPlaceModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }