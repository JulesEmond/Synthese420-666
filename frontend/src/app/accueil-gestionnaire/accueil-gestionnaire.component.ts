import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gestionnaire } from 'src/models/gestionnaire';
import { GestionnaireService } from 'src/services/gestionnaire.service';

@Component({
  selector: 'app-accueil-gestionnaire',
  templateUrl: './accueil-gestionnaire.component.html',
  styleUrls: ['./accueil-gestionnaire.component.css']
})
export class AccueilGestionnaireComponent implements OnInit {
  gestionnaire: Gestionnaire;
  nom: string;
  id : number;

  constructor(private router: Router, public service: GestionnaireService) { }



  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('User'));
    if(this.id == null){
      this.router.navigate(['/login']);
    }
    else {
      this.service.findById(this.id).subscribe(
        (data) => {
          this.gestionnaire = data;
          this.nom = this.gestionnaire.firstname + " " + this.gestionnaire.lastname;
        }
      )
    }
  }

}
