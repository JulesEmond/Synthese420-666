import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observateur } from '../models/observateur';
import { BasicCrud } from './basic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ObservateurService extends BasicCrud<Observateur, Number>{

    constructor(http: HttpClient) { 
      super(http, 'http://localhost:9898/backend/observateur');
    }
  
    public logout(){
      sessionStorage.clear();
    }
}
