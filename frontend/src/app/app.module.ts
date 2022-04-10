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
import { UpdateLigueComponent } from './update-ligue/update-ligue.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { VoirLiguePublicComponent } from './voir-ligue-public/voir-ligue-public.component';
import { VoirEquipePublicComponent } from './voir-equipe-public/voir-equipe-public.component';
import { VoirJoueurPublicComponent } from './voir-joueur-public/voir-joueur-public.component';
import { InviteObservateurComponent } from './invite-observateur/invite-observateur.component';
import { VoirLiguePriveComponent } from './voir-ligue-prive/voir-ligue-prive.component';

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
    VoirJoueurComponent,
    UpdateLigueComponent,
    UpdateEquipeComponent,
    UpdateJoueurComponent,
    VoirLiguePublicComponent,
    VoirEquipePublicComponent,
    VoirJoueurPublicComponent,
    InviteObservateurComponent,
    VoirLiguePriveComponent
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
