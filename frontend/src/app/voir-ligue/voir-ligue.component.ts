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

  listLigues: Array<Ligue>;
  validMessage: string = '';

  constructor(private ligueService: LigueService, private router: Router) {}

  ngOnInit(): void {
      this.getAllLigues();
  }

  getAllLigues(): void {
    this.ligueService.findByParent(parseInt(sessionStorage.getItem('User'))).subscribe(
      (data) => {
        this.listLigues = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public infoEquipes(ligueId : number) {
    console.log(ligueId)
  }

}
