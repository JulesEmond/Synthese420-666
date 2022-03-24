import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joueur } from 'src/models/joueur';
import { BasicCrud } from './basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class JoueurService extends BasicCrud<Joueur, Number>{

  constructor(http: HttpClient) { 
    super(http, 'http://localhost:9898/backend/joueur');
  }
}
