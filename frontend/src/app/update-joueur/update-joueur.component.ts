import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Joueur } from 'src/models/joueur';
import { JoueurService } from 'src/services/joueur.service';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent implements OnInit {
  validMessage:string;
  joueur: Joueur;
  id: number;
  joueurInit: Joueur;
  
  updateJoueur = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
  });

  constructor(private joueurService: JoueurService, private router : Router) { }

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('Joueur'));
    if(this.id == null){
      this.router.navigate(['/joueurs']);
    }
    else {
      this.joueurService.findById(this.id).subscribe(
        (data) => {
          this.joueurInit = data;
        }
      )
    }
  }

  onSubmit(){
    this.joueur = this.updateJoueur.value
    this.joueur.equipe = this.joueurInit.equipe
    this.joueur.id = this.joueurInit.id
    if(this.updateJoueur.valid){
      this.joueurService.save(this.joueur).subscribe(
        (data) => {
          this.joueur = data;
          if (this.joueur != null){
            this.updateJoueur.reset();
            this.router.navigate(['/joueurs']);
          } else {
            this.validMessage = "Erreur lors de l'ajout du joueur'";
          }
        },
        (err) => {
          console.log(err);
          this.validMessage = "Erreur lors de la transmission du joueur";
        }
      );
    } else {
      this.validMessage = 'Veuillez remplir le formulaire avant de le soumettre!';
    }
  }
}
