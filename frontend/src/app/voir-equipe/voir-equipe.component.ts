import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/models/equipe';
import { EquipeService } from 'src/services/equipe.service';

@Component({
  selector: 'app-voir-equipe',
  templateUrl: './voir-equipe.component.html',
  styleUrls: ['./voir-equipe.component.css']
})
export class VoirEquipeComponent implements OnInit {
  listEquipes: Array<Equipe>;
  validMessage: string = '';

  constructor(private equipeService: EquipeService, private router: Router) {}

  ngOnInit(): void {
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
    console.log(equipeId.toString());
  }

  public createEquipe() {
    this.router.navigate(['/creer-equipes']);
  }
}
