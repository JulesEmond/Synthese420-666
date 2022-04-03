import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/models/equipe';
import { Ligue } from 'src/models/ligue';
import { EquipeService } from 'src/services/equipe.service';
import { LigueService } from 'src/services/ligue.service';

@Component({
  selector: 'app-voir-equipe-public',
  templateUrl: './voir-equipe-public.component.html',
  styleUrls: ['./voir-equipe-public.component.css']
})
export class VoirEquipePublicComponent implements OnInit {
  listEquipes: Array<Equipe>;
  validMessage: string = '';
  id: number;
  ligue: Ligue;
  nomLigue: string = '';

  constructor(private equipeService: EquipeService, private ligueService: LigueService, private router: Router) {}

  ngOnInit(): void {
    sessionStorage.removeItem('Equipe')
    this.id = parseInt(sessionStorage.getItem('Ligue'));
    if(sessionStorage.getItem('Ligue') == null){
      this.router.navigate(['/accueil-observateur']);
    }
    else {
      this.ligueService.findById(this.id).subscribe(
        (data) => {
          this.ligue = data;
          this.nomLigue = this.ligue.name;
        }
      )
    }
    this.getAllEquipes();
  }

  getAllEquipes(): void {
    this.equipeService.findByParent(parseInt(sessionStorage.getItem('Ligue'))).subscribe(
      (data) => {
        this.listEquipes = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public infoJoueurs(equipeId : number) {
    sessionStorage.setItem('Equipe', equipeId.toString());
    this.router.navigate(['/joueurs-publiques']);
  }
}
