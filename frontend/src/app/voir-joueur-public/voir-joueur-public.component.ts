import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/models/equipe';
import { Joueur } from 'src/models/joueur';
import { EquipeService } from 'src/services/equipe.service';
import { JoueurService } from 'src/services/joueur.service';

@Component({
  selector: 'app-voir-joueur-public',
  templateUrl: './voir-joueur-public.component.html',
  styleUrls: ['./voir-joueur-public.component.css']
})
export class VoirJoueurPublicComponent implements OnInit {
  listJoueurs: Array<Joueur>;
  validMessage: string = '';
  id:number;
  equipe: Equipe;
  nomEquipe:string = '';

  constructor(private joueurService: JoueurService, private equipeService: EquipeService, private router: Router) {}

  ngOnInit(): void {
    sessionStorage.removeItem('Joueur');
    this.id = parseInt(sessionStorage.getItem('Equipe'));
    if(sessionStorage.getItem('Equipe') == null){
      this.router.navigate(['/accueil-observateur']);
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

  public retourEquipe() {
    this.router.navigate(['/equipes-observateur']);
  }
}
