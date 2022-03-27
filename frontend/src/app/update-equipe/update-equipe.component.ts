import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from 'src/models/equipe';
import { EquipeService } from 'src/services/equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  validMessage:string;
  equipe: Equipe
  id: number;
  equipeInit: Equipe

  updateEquipe = new FormGroup({
    name : new FormControl('', Validators.required),
    homeStadium : new FormControl('', Validators.required),
    manager : new FormControl('', Validators.required),
    coach : new FormControl('', Validators.required),
    assistantCoach : new FormControl('', Validators.required)
  });

  constructor(private equipeService: EquipeService,  private router : Router) { }

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('Equipe'));
    if(this.id == null){
      this.router.navigate(['/mes-equipes']);
    }
    else {
      this.equipeService.findById(this.id).subscribe(
        (data) => {
          this.equipeInit= data;
        }
      )
    }
  }

  onSubmit(){
    this.equipe = this.updateEquipe.value
    this.equipe.ligue = this.equipeInit.ligue
    this.equipe.id = this.equipeInit.id
    if(this.updateEquipe.valid){
      this.equipeService.update(this.equipe).subscribe(
        (data) => {
          this.equipe = data;
          if (this.equipe != null){
            this.updateEquipe.reset();
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
