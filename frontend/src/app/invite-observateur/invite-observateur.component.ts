import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observateur } from 'src/models/observateur';
import { LigueService } from 'src/services/ligue.service';
import { ObservateurService } from 'src/services/observateur.service';

@Component({
  selector: 'app-invite-observateur',
  templateUrl: './invite-observateur.component.html',
  styleUrls: ['./invite-observateur.component.css']
})
export class InviteObservateurComponent implements OnInit {
  validMessage:string;
  observateur: Observateur;
  username: string;
  ligueId:number;

  inviteForm = new FormGroup({
    username : new FormControl('', Validators.required),
  });

  constructor(private ligueService: LigueService ,private observateurService: ObservateurService, private router : Router) { }

  ngOnInit(): void {
    this.ligueId = parseInt(sessionStorage.getItem('Ligue'));
    if(this.ligueId == null){
      this.router.navigate(['/mes-ligues']);
    }
  }

  onSubmit(){
    if(this.inviteForm.valid){
      this.username = this.inviteForm.get('username').value;
      this.observateurService.invite(this.username, this.ligueId).subscribe(
        (data) => {
          this.observateur = data;
          if (this.observateur != null){
            this.inviteForm.reset();
            this.validMessage = "Cet observateur a été invité";
          } else {
            this.validMessage = "Cet observateur n'existe pas";
          }
        },
        (err) => {
          console.log(err);
          this.validMessage = "Erreur lors de la transmission des informations";
        }
      );
    } else {
      this.validMessage = 'Veuillez remplir le formulaire avant de le soumettre!';
    }
  }
}
