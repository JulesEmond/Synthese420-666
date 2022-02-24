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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpGestionnaireComponent,
    SignUpObservateurComponent,
    HeaderComponent,
    AccueilObservateurComponent,
    AccueilGestionnaireComponent
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
