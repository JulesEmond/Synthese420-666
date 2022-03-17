import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gestionnaire } from 'src/models/gestionnaire';
import { Observateur } from 'src/models/observateur';
import { GestionnaireService } from 'src/services/gestionnaire.service';
import { ObservateurService } from 'src/services/observateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  validMessage:string = '';
  gestionnaire: Gestionnaire;
  observateur: Observateur;

  loginForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });
  
  constructor(private gestionnaireService : GestionnaireService, private observateurService : ObservateurService, private router : Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  public onSubmit(){
    if(this.loginForm.valid){
      this.gestionnaireService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
        (data) => {
          this.loginForm.reset();
          this.gestionnaire = data;
            if(this.gestionnaire  != null){
              sessionStorage.setItem('User', this.gestionnaire.id.toString());
              this.router.navigate(['/accueil-gestionnaire']);
              }
            }
        );
        (err) => {
          console.log(err);
          this.validMessage = 'Erreur lors de la connexion';
        }
          this.observateurService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(
            (data) => {
              this.loginForm.reset();
              this.observateur = data;
                if(this.observateur  != null){
                  sessionStorage.setItem('User', this.observateur.id.toString());
                  this.router.navigate(['/accueil-observateur']);
                  }
                }
            );
            (err) => {
              console.log(err);
              this.validMessage = 'Erreur lors de la connexion';
            }
      } else {
        this.validMessage = 'Veuillez remplir le formulaire avant de le soumettre!';
      }
  }
}
