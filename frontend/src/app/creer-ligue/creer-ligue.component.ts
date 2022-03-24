import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gestionnaire } from 'src/models/gestionnaire';
import { Ligue } from 'src/models/ligue';
import { GestionnaireService } from 'src/services/gestionnaire.service';
import { LigueService } from 'src/services/ligue.service';

@Component({
  selector: 'app-creer-ligue',
  templateUrl: './creer-ligue.component.html',
  styleUrls: ['./creer-ligue.component.css']
})
export class CreerLigueComponent implements OnInit {

  validMessage:string;
  ligue: Ligue
  id: number
  gestionnaire: Gestionnaire

  createLigue = new FormGroup({
    name : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    sport : new FormControl('', Validators.required)
  });

  constructor(private ligueService: LigueService, private gestionnaireService: GestionnaireService,  private router : Router) { }

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('User'));
    if(this.id == null){
      this.router.navigate(['/login']);
    }
    else {
      this.gestionnaireService.findById(this.id).subscribe(
        (data) => {
          this.gestionnaire = data;
        }
      )
    }
  }

  onSubmit(){
    this.ligue = this.createLigue.value
    this.ligue.gestionnaire = this.gestionnaire
    console.log(this.ligue)
    if(this.createLigue.valid){
      this.ligueService.save(this.ligue).subscribe(
        (data) => {
          this.ligue = data;
          if (this.ligue != null){
            this.createLigue.reset();
            this.router.navigate(['/accueil-gestionnaire']);
          } else {
            this.validMessage = "Erreur lors de la création de la ligue";
          }

        },
        (err) => {
          console.log(err);
          this.validMessage = 'Erreur lors de la transmission de la ligue';
        }
      );
    } else {
      this.validMessage = 'Veuillez remplir le formulaire avant de le soumettre!';
    }
  }
}
