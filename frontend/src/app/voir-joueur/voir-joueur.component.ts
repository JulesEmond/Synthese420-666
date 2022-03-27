import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/models/equipe';
import { Joueur } from 'src/models/joueur';
import { EquipeService } from 'src/services/equipe.service';
import { JoueurService } from 'src/services/joueur.service';

@Component({
  selector: 'app-voir-joueur',
  templateUrl: './voir-joueur.component.html',
  styleUrls: ['./voir-joueur.component.css']
})
export class VoirJoueurComponent implements OnInit {
  listJoueurs: Array<Joueur>;
  validMessage: string = '';
  id:number;
  equipe: Equipe;
  nomEquipe:string = '';

  constructor(private joueurService: JoueurService, private equipeService: EquipeService, private router: Router) {}

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('Equipe'));
    if(this.id == null){
      this.router.navigate(['/accueil-gestionnaire']);
    }
    else {
      this.equipeService.findById(this.id).subscribe(
        (data) => {
          this.equipe = data;
          this.nomEquipe = this.equipe.name;
        }
      )
    }
    this.getAllJoueurs();
  }

  getAllJoueurs(): void {
    this.joueurService.findByParent(parseInt(sessionStorage.getItem('Equipe'))).subscribe(
      (data) => {
        this.listJoueurs= data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public createJoueur() {
    this.router.navigate(['/ajout-joueurs']);
  }

  public retourEquipe() {
    this.router.navigate(['/mes-equipes']);
  }

  public deleteJoueur(joueurId: number) {
    if (window.confirm("Êtes-vous certains?")) {
      this.joueurService.deleteById(joueurId).subscribe(
        (err) => {
          console.log(err);
        }
      );
      this.router.navigate(['/joueurs']).then(() => {window.location.reload();});
    }
  }
}
