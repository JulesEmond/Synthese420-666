import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from 'src/models/equipe';
import { Joueur } from 'src/models/joueur';
import { EquipeService } from 'src/services/equipe.service';
import { JoueurService } from 'src/services/joueur.service';

@Component({
  selector: 'app-creer-joueur',
  templateUrl: './creer-joueur.component.html',
  styleUrls: ['./creer-joueur.component.css']
})
export class CreerJoueurComponent implements OnInit {
  validMessage:string;
  joueur: Joueur;
  id: number;
  equipe: Equipe;
  
  createJoueur = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    age : new FormControl('', Validators.required),
  });

  constructor(private joueurService: JoueurService, private equipeService: EquipeService,  private router : Router) { }

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('Equipe'));
    if(this.id == null){
      this.router.navigate(['/accueil-gestionnaire']);
    }
    else {
      this.equipeService.findById(this.id).subscribe(
        (data) => {
          this.equipe = data;
        }
      )
    }
  }

  onSubmit(){
    this.joueur = this.createJoueur.value
    this.joueur.equipe = this.equipe
    if(this.createJoueur.valid){
      this.joueurService.save(this.joueur).subscribe(
        (data) => {
          this.joueur = data;
          if (this.joueur != null){
            this.createJoueur.reset();
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
