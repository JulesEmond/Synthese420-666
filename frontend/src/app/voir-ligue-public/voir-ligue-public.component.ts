import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ligue } from 'src/models/ligue';
import { LigueService } from 'src/services/ligue.service';

@Component({
  selector: 'app-voir-ligue-public',
  templateUrl: './voir-ligue-public.component.html',
  styleUrls: ['./voir-ligue-public.component.css']
})
export class VoirLiguePublicComponent implements OnInit {

  liguesPublic: Array<Ligue>;
  validMessage: string = '';

  constructor(private ligueService: LigueService, private router: Router) {}

  ngOnInit(): void {
      sessionStorage.removeItem('Ligue')
      this.getAllLigues();
  }

  getAllLigues(): void {
    this.ligueService.findAllPublic().subscribe(
      (data) => {
        this.liguesPublic = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public infoEquipes(ligueId : number) {
    sessionStorage.setItem('Ligue', ligueId.toString());
    this.router.navigate(['/equipes-publiques']);
  }
}
