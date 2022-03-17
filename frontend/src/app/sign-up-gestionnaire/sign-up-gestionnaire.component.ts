import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gestionnaire } from 'src/models/gestionnaire';
import { GestionnaireService } from 'src/services/gestionnaire.service';

@Component({
  selector: 'app-sign-up-gestionnaire',
  templateUrl: './sign-up-gestionnaire.component.html',
  styleUrls: ['./sign-up-gestionnaire.component.css']
})
export class SignUpGestionnaireComponent implements OnInit {

  validMessage:string;
  gestionnaire:Gestionnaire

  signinGestionnaireForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    phoneNumber : new FormControl('', Validators.required),
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required),
  });

  constructor(private gestionnaireService : GestionnaireService, private router : Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  onSubmit(){
    if(this.signinGestionnaireForm.valid){
      this.gestionnaireService.save(this.signinGestionnaireForm.value).subscribe(
        (data) => {
          this.gestionnaire = data;
          if (this.gestionnaire != null){
            this.signinGestionnaireForm.reset();
            sessionStorage.setItem('User', this.gestionnaire.id.toString());
            this.router.navigate(['/accueil-gestionnaire']);
          } else {
            this.validMessage = "Ce nom d'utilisateur est déjà utilisé pour un autre compte";
          }

        },
        (err) => {
          console.log(err);
          this.validMessage = 'Erreur lors de la transmission du client';
        }
      );
    } else {
      this.validMessage = 'Veuillez remplir le formulaire avant de le soumettre!';
    }
  }

}
