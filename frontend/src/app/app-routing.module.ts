import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilGestionnaireComponent } from './accueil-gestionnaire/accueil-gestionnaire.component';
import { AccueilObservateurComponent } from './accueil-observateur/accueil-observateur.component';
import { CreerEquipeComponent } from './creer-equipe/creer-equipe.component';
import { CreerJoueurComponent } from './creer-joueur/creer-joueur.component';
import { CreerLigueComponent } from './creer-ligue/creer-ligue.component';
import { LoginComponent } from './login/login.component';
import { SignUpGestionnaireComponent } from './sign-up-gestionnaire/sign-up-gestionnaire.component';
import { SignUpObservateurComponent } from './sign-up-observateur/sign-up-observateur.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { UpdateLigueComponent } from './update-ligue/update-ligue.component';
import { VoirEquipeComponent } from './voir-equipe/voir-equipe.component';
import { VoirJoueurComponent } from './voir-joueur/voir-joueur.component';
import { VoirLigueComponent } from './voir-ligue/voir-ligue.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signUpGestionnaire', component:SignUpGestionnaireComponent},
  {path: 'signUpObservateur', component:SignUpObservateurComponent},
  {path: 'accueil-gestionnaire', component:AccueilGestionnaireComponent},
  {path: 'accueil-observateur', component:AccueilObservateurComponent},
  {path: 'update-ligues', component:UpdateLigueComponent},
  {path: 'creer-ligues', component:CreerLigueComponent},
  {path: 'mes-ligues', component:VoirLigueComponent},
  {path: 'creer-equipes', component:CreerEquipeComponent},
  {path: 'update-equipes', component:UpdateEquipeComponent},
  {path: 'mes-equipes', component:VoirEquipeComponent},
  {path: 'ajout-joueurs', component:CreerJoueurComponent},
  {path: 'update-joueurs', component:UpdateJoueurComponent},
  {path: 'joueurs', component:VoirJoueurComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
