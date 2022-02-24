import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilGestionnaireComponent } from './accueil-gestionnaire/accueil-gestionnaire.component';
import { AccueilObservateurComponent } from './accueil-observateur/accueil-observateur.component';
import { LoginComponent } from './login/login.component';
import { SignUpGestionnaireComponent } from './sign-up-gestionnaire/sign-up-gestionnaire.component';
import { SignUpObservateurComponent } from './sign-up-observateur/sign-up-observateur.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signUpGestionnaire', component:SignUpGestionnaireComponent},
  {path: 'signUpObservateur', component:SignUpObservateurComponent},
  {path: 'accueil-gestionnaire', component:AccueilGestionnaireComponent},
  {path: 'accueil-observateur', component:AccueilObservateurComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
