import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ligue } from 'src/models/ligue';
import { BasicCrud } from './basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class LigueService extends BasicCrud<Ligue, Number>{

  constructor(http: HttpClient) { 
    super(http, 'http://localhost:9898/backend/ligue');
  }
}
