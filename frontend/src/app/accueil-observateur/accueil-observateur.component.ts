import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observateur } from 'src/models/observateur';
import { ObservateurService } from 'src/services/observateur.service';

@Component({
  selector: 'app-accueil-observateur',
  templateUrl: './accueil-observateur.component.html',
  styleUrls: ['./accueil-observateur.component.css']
})
export class AccueilObservateurComponent implements OnInit {
  observateur: Observateur;
  nom: string;
  id : number;

  constructor(private router: Router, public service: ObservateurService) { }



  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('User'));
    if(this.id == null){
      this.router.navigate(['/login']);
    }
    else {
      this.service.findById(this.id).subscribe(
        (data) => {
          this.observateur = data;
          this.nom = this.observateur.firstname + " " + this.observateur.lastname;
        }
      )
    }
  }

}
