import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ligue } from 'src/models/ligue';
import { LigueService } from 'src/services/ligue.service';

@Component({
  selector: 'app-voir-ligue-prive',
  templateUrl: './voir-ligue-prive.component.html',
  styleUrls: ['./voir-ligue-prive.component.css']
})
export class VoirLiguePriveComponent implements OnInit {
  liguesPrive: Array<Ligue>;
  validMessage: string = '';
  observateurId: number;

  constructor(private ligueService: LigueService, private router: Router) {}

  ngOnInit(): void {
    this.observateurId = parseInt(sessionStorage.getItem('User'));
    if(this.observateurId == null){
      this.router.navigate(['/accueil-observateur']);
    } else{
      sessionStorage.removeItem('Ligue')
      this.getAllLigues();
    }
  }

  getAllLigues(): void {
    this.ligueService.findPrive(this.observateurId).subscribe(
      (data) => {
        this.liguesPrive = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public infoEquipes(ligueId : number) {
    sessionStorage.setItem('Ligue', ligueId.toString());
    this.router.navigate(['/equipes-observateur']);
  }
}
