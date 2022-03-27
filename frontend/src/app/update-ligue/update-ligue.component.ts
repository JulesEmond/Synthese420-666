import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gestionnaire } from 'src/models/gestionnaire';
import { Ligue } from 'src/models/ligue';
import { GestionnaireService } from 'src/services/gestionnaire.service';
import { LigueService } from 'src/services/ligue.service';

@Component({
  selector: 'app-update-ligue',
  templateUrl: './update-ligue.component.html',
  styleUrls: ['./update-ligue.component.css']
})
export class UpdateLigueComponent implements OnInit {

  validMessage:string;
  ligue: Ligue
  id: number
  ligueInit: Ligue

  updateLigue = new FormGroup({
    name : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    sport : new FormControl('', Validators.required)
  });

  constructor(private ligueService: LigueService, private router : Router) { }

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('Ligue'));
    if(this.id == null){
      this.router.navigate(['/mes-ligues']);
    }
    else {
      this.ligueService.findById(this.id).subscribe(
        (data) => {
          this.ligueInit = data;
        }
      )
    }
  }

  onSubmit(){
    this.ligue = this.updateLigue.value
    this.ligue.gestionnaire = this.ligueInit.gestionnaire
    this.ligue.id = this.ligueInit.id
    if(this.updateLigue.valid){
      this.ligueService.update(this.ligue).subscribe(
        (data) => {
          this.ligue = data;
          if (this.ligue != null){
            this.updateLigue.reset();
            this.router.navigate(['/mes-ligues']);
          } else {
            this.validMessage = "Erreur lors de la modification de la ligue";
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
