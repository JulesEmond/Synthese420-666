import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpGestionnaireComponent } from './sign-up-gestionnaire/sign-up-gestionnaire.component';
import { SignUpObservateurComponent } from './sign-up-observateur/sign-up-observateur.component';
import { HeaderComponent } from './header/header.component';
import { AccueilObservateurComponent } from './accueil-observateur/accueil-observateur.component';
import { AccueilGestionnaireComponent } from './accueil-gestionnaire/accueil-gestionnaire.component';
import { Header2Component } from './header2/header2.component';
import { CreerLigueComponent } from './creer-ligue/creer-ligue.component';
import { VoirLigueComponent } from './voir-ligue/voir-ligue.component';
import { CreerEquipeComponent } from './creer-equipe/creer-equipe.component';
import { VoirEquipeComponent } from './voir-equipe/voir-equipe.component';
import { CreerJoueurComponent } from './creer-joueur/creer-joueur.component';
import { VoirJoueurComponent } from './voir-joueur/voir-joueur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpGestionnaireComponent,
    SignUpObservateurComponent,
    HeaderComponent,
    AccueilObservateurComponent,
    AccueilGestionnaireComponent,
    Header2Component,
    CreerLigueComponent,
    VoirLigueComponent,
    CreerEquipeComponent,
    VoirEquipeComponent,
    CreerJoueurComponent,
    VoirJoueurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
