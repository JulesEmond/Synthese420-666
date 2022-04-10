import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ligue } from 'src/models/ligue';
import { LigueService } from 'src/services/ligue.service';

@Component({
  selector: 'app-voir-ligue',
  templateUrl: './voir-ligue.component.html',
  styleUrls: ['./voir-ligue.component.css']
})
export class VoirLigueComponent implements OnInit {

  liguesPublic: Array<Ligue>;
  liguesPrive: Array<Ligue>;
  validMessage: string = '';

  constructor(private ligueService: LigueService, private router: Router) {}

  ngOnInit(): void {
      sessionStorage.removeItem('Ligue')
      this.getAllLigues();
  }

  getAllLigues(): void {
    this.ligueService.findByParentAndPrivacy(parseInt(sessionStorage.getItem('User')), "public").subscribe(
      (data) => {
        this.liguesPublic = data;
      },
      (err) => {
        console.log(err);
      }
    );

    this.ligueService.findByParentAndPrivacy(parseInt(sessionStorage.getItem('User')), "private").subscribe(
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
    this.router.navigate(['/mes-equipes']);
  }

  public updateLigue(ligueId : number) {
    sessionStorage.setItem('Ligue', ligueId.toString());
    this.router.navigate(['/update-ligues']);
  }

  public deleteLigue(ligueId: number) {
    if (window.confirm("Êtes-vous certains?")) {
      this.ligueService.deleteById(ligueId).subscribe(
        (err) => {
          console.log(err);
        }
      );
      this.router.navigate(['/mes-ligues']).then(() => {window.location.reload();});
    }
  }

  public inviteLigue(ligueId : number) {
    sessionStorage.setItem('Ligue', ligueId.toString());
    this.router.navigate(['/invitation']);
  }

}
