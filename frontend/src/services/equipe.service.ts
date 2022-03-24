import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from 'src/models/equipe';
import { BasicCrud } from './basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class EquipeService extends BasicCrud<Equipe, Number>{

  constructor(http: HttpClient) { 
    super(http, 'http://localhost:9898/backend/equipe');
  }
}
