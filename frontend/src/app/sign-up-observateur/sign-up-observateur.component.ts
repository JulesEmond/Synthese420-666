import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observateur } from 'src/models/observateur';
import { ObservateurService } from 'src/services/observateur.service';

@Component({
  selector: 'app-sign-up-observateur',
  templateUrl: './sign-up-observateur.component.html',
  styleUrls: ['./sign-up-observateur.component.css']
})
export class SignUpObservateurComponent implements OnInit {

  validMessage:string;
  observateur: Observateur;

  signinObservateurForm = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required),
  });

  constructor(private observateurService : ObservateurService, private router : Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  onSubmit(){
    if(this.signinObservateurForm.valid){
      this.observateurService.save(this.signinObservateurForm.value).subscribe(
        (data) => {
          this.observateur = data;
          if (this.observateur != null){
            this.signinObservateurForm.reset();
            sessionStorage.setItem('User', this.observateur.id.toString());
            this.router.navigate(['/accueil-observateur']);
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
