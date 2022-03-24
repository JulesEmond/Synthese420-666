import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from 'src/models/equipe';
import { Ligue } from 'src/models/ligue';
import { EquipeService } from 'src/services/equipe.service';
import { LigueService } from 'src/services/ligue.service';

@Component({
  selector: 'app-creer-equipe',
  templateUrl: './creer-equipe.component.html',
  styleUrls: ['./creer-equipe.component.css']
})
export class CreerEquipeComponent implements OnInit {
  validMessage:string;
  equipe: Equipe
  id: number;
  ligue: Ligue;

  createEquipe = new FormGroup({
    name : new FormControl('', Validators.required),
    homeStadium : new FormControl('', Validators.required),
    manager : new FormControl('', Validators.required),
    coach : new FormControl('', Validators.required),
    assistantCoach : new FormControl('', Validators.required)
  });

  constructor(private equipeService: EquipeService, private ligueService: LigueService,  private router : Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem('Equipe')
    this.id = parseInt(sessionStorage.getItem('Ligue'));
    if(this.id == null){
      this.router.navigate(['/accueil-gestionnaire']);
    }
    else {
      this.ligueService.findById(this.id).subscribe(
        (data) => {
          this.ligue = data;
        }
      )
    }
  }

  onSubmit(){
    this.equipe = this.createEquipe.value
    this.equipe.ligue = this.ligue
    if(this.createEquipe.valid){
      this.equipeService.save(this.equipe).subscribe(
        (data) => {
          this.equipe = data;
          if (this.equipe != null){
            this.createEquipe.reset();
            this.router.navigate(['/mes-equipes']);
          } else {
            this.validMessage = "Erreur lors de la création de l'équipe";
          }
        },
        (err) => {
          console.log(err);
          this.validMessage = "Erreur lors de la transmission de l'équipe";
        }
      );
    } else {
      this.validMessage = 'Veuillez remplir le formulaire avant de le soumettre!';
    }
  }
}
